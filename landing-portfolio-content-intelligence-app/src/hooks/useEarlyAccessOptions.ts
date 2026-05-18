// useEarlyAccessOptions — fetches platform and role options from Supabase at runtime.
// Replaces the hardcoded UUIDs that lived in constants/earlyAccessOptions.ts.
//
// Confirmed DB schemas:
//   roles:     id (uuid), code (text: creator|agency|brand|admin), name (text), description (text), created_at
//   platforms: id (uuid), name (text), slug (text), icon (text), is_active (boolean), type_id (uuid), created_at
//
// RLS requirement: both tables must allow SELECT for the `anon` role,
// since the modal is shown to unauthenticated users.

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export type EarlyAccessOption = {
  id: string;    // UUID — sent to the edge function as platform_id / role_id
  label: string; // Display name shown in the chip (e.g. "LinkedIn", "Creator")
  value: string; // Code/slug (e.g. "linkedin", "creator") — for i18n key lookup if needed
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
          // platforms: slug confirmed. Filter is_active = true to exclude deactivated entries.
          supabase
            .from("platforms")
            .select("id, name, slug")
            .eq("is_active", true)
            .order("name"),

          // roles: confirmed schema uses "code" (not "slug").
          // Exclude "admin" — system role, not meant for the public-facing form.
          supabase
            .from("roles")
            .select("id, name, code")
            .neq("code", "admin")
            .order("name"),
        ]);

        if (platformError) throw platformError;
        if (roleError)     throw roleError;

        setPlatforms(
          (platformData ?? []).map((p) => ({
            id:    p.id,
            label: p.name,
            value: p.slug,   // confirmed: "slug" column exists
          }))
        );
        setRoles(
          (roleData ?? []).map((r) => ({
            id:    r.id,
            label: r.name,
            value: r.code,   // confirmed: "code" column (creator | agency | brand)
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
