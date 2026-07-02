import { supabase } from "../lib/supabaseClient";

const TABLE_NAME = "Users";

export async function loginUser({ userName, password }) {
  const { data: user, error } = await supabase
    .from(TABLE_NAME)
    .select("*")
    .eq("UserName", userName)
    .single();

  if (error || !user) {
    throw new Error("کاربری با این نام کاربری یافت نشد");
  }

  if (user.UserPassword !== password) {
    throw new Error("رمز عبور اشتباه است");
  }

  return user;
}

export async function signupUser({ userName, email, password }) {
  const { data: existingUser, error: checkError } = await supabase
    .from(TABLE_NAME)
    .select("*")
    .or(`UserName.eq.${userName},UserEmail.eq.${email}`)
    .single();

  if (checkError && checkError.code !== "PGRST116") {
    throw checkError;
  }

  if (existingUser) {
    if (existingUser.UserName === userName) {
      throw new Error("این نام کاربری قبلاً ثبت شده است");
    }

    if (existingUser.UserEmail === email) {
      throw new Error("این ایمیل قبلاً ثبت شده است");
    }
  }

  const { data: newUser, error } = await supabase
    .from(TABLE_NAME)
    .insert([
      {
        UserName: userName,
        UserEmail: email,
        UserPassword: password,
      },
    ])
    .select()
    .single();

  if (error) {
    if (error.code === "23505") {
      throw new Error("این نام کاربری یا ایمیل قبلاً ثبت شده است");
    }

    throw error;
  }

  return newUser;
}