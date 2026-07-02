import { supabase } from "../lib/supabaseClient";

export async function uploadImage(file, bucketName = "News_Images") {
  const fileExt = file.name.split(".").pop();

  const fileName = `${crypto.randomUUID()}.${fileExt}`;

  const { error } = await supabase.storage
    .from(bucketName)
    .upload(fileName, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  const {
    data: { publicUrl },
  } = supabase.storage
    .from(bucketName)
    .getPublicUrl(fileName);

  return publicUrl;
}