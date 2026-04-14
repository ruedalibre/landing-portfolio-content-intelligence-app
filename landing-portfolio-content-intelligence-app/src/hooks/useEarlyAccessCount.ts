import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export function useEarlyAccessCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      const { count, error } = await supabase
        .from("early_access_requests")
        .select("*", { count: "exact", head: true })
        .eq("status", "pending");

      if (!error) {
        setCount(count || 0);
      }
    };

    fetchCount();
  }, []);

  return count;
}
