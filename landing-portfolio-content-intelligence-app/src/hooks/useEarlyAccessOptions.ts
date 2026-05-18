// useEarlyAccessOptions — fetches platform and role options from Supabase at runtime.
// Replaces the hardcoded UUIDs that lived in constants/earlyAccessOptions.ts.
//
// NOTE: Verify column names match the actual DB schema before deploying.
// Expected schema:
//   platforms: id (uuid), name (text), slug (text)
//   roles:     id (uuid), name (text), slug (text)
// If columns differ (e.g. "label"/"value"), update the .select() and map() below.
//
// RLS requirement: both tables must allow SELECT for the `anon` role,
// since the modal is shown to unauthenticated users.

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export type EarlyAccessOption = {
  id: string;   // UUID — sent to the edge function as platform_id / role_id
  label: string; // Display name shown in the chip (e.g. "LinkedIn", "Creator")
  value: string; // Slug (e.g. "linkedin", "creator") — used for i18n key lookup if needed
};

type EarlyAccessOptions = {
  platforms: EarlyAccessOption[];
  roles: EarlyAccessOption[];
  optionsLoading: boolean;
  optionsError: string | null;
};

export const useEarlyAccessOptions = (): EarlyAccessOptions => {
  const [platforms, setPlatforms] = useState<EarlyAccessOption[]>([]);
  const [roles, setRoles]         = useState<EarlyAccessOption[]>([]);
  const [optionsLoading, setOptionsLoading] = useState(true);
  const [optionsError, setOptionsError]     = useState<string | null>(null);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const [
          { data: platformData, error: platformError },
          { data: roleData,     error: roleError },
        ] = await Promise.all([
          supabase.from("platforms").select("id, name, slug").order("name"),
          supabase.from("roles").select("id, name, slug").order("name"),
        ]);

        if (platformError) throw platformError;
        if (roleError)     throw roleError;

        setPlatforms(
          (platformData ?? []).map((p) => ({
            id:    p.id,
            label: p.name,
            value: p.slug,
          }))
        );
        setRoles(
          (roleData ?? []).map((r) => ({
            id:    r.id,
            label: r.name,
            value: r.slug,
          }))
        );
      } catch {
        setOptionsError("No se pudieron cargar las opciones. Intenta de nuevo.");
      } finally {
        setOptionsLoading(false);
      }
    };

    fetchOptions();
  }, []);

  return { platforms, roles, optionsLoading, optionsError };
};
