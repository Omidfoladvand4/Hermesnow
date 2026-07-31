import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [getUserLoading, setGetUserLoading] = useState(true);
  const [getUserError, setGetUserError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      setGetUserLoading(true);
      setGetUserError(null);

      const { data, error } = await supabase
        .from("Users")
        .select(`
          UserId,
          UserName,
          UserAvatar,
          UserAge,
          FavoritesTopic,
          IsAdmin
        `);

      if (error) throw error;

      setUsers(data ?? []);
    } catch (err) {
      setGetUserError(err.message);
    } finally {
      setGetUserLoading(false);
    }
  }

  const refetch = () => fetchUsers();

  return {
    users,
    getUserLoading,
    getUserError,
    refetch,
  };
}