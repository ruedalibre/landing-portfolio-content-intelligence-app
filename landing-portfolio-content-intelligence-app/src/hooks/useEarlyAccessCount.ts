import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export const useEarlyAccessCount = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      const { count, error } = await supabase
        .from('early_access_requests')
        .select('*', { count: 'exact', head: true });

      if (!error && count !== null) {
        setCount(count);
      }
    };

    fetchCount();
  }, []);

  return count;
};
