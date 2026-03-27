import { useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

export function useAdmin(userId?: string | null) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isSupabaseConfigured() || !userId) {
      setLoading(false);
      return;
    }

    supabase
      .from('greekheb_profiles')
      .select('is_admin')
      .eq('user_id', userId)
      .single()
      .then(({ data }) => {
        setIsAdmin(data?.is_admin ?? false);
        setLoading(false);
      });
  }, [userId]);

  return { isAdmin, loading };
}
