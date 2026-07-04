import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signup = async (userData) => {
    setLoading(true);
    setError(null);

    try {
      const { data: existingUser, error: checkError } = await supabase
        .from("Users")
        .select("*")
        .or(`UserName.eq.${userData.userName},UserEmail.eq.${userData.email}`)
        .single();

      if (checkError && checkError.code !== "PGRST116") {
        throw checkError;
      }

      if (existingUser) {
        if (existingUser.UserName === userData.userName) {
          throw new Error("این نام کاربری قبلاً ثبت شده است");
        }
        if (existingUser.UserEmail === userData.email) {
          throw new Error("این ایمیل قبلاً ثبت شده است");
        }
      }

      const { data: newUser, error: signUpError } = await supabase
        .from("Users")
        .insert([
          {
            UserName: userData.userName,
            UserEmail: userData.email,
            UserPassword: userData.password,
          },
        ])
        .select()
        .single();

      if (signUpError) {
        if (signUpError.code === "23505") {
          throw new Error("این نام کاربری یا ایمیل قبلاً ثبت شده است");
        }
        throw signUpError;
      }

    

      return { success: true, user: newUser };
    } catch (err) {
      const errorMessage = err.message || "خطا در ثبت‌نام";
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return {
    signup,
    loading,
    error,
  };
};
