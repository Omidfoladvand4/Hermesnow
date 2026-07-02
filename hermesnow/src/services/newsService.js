import { supabase } from "../lib/supabaseClient";

export async function incrementNewsView(id, currentViews) {
  const { error } = await supabase
    .from("News")
    .update({
      News_view: currentViews + 1,
    })
    .eq("id", id);

  if (error) throw error;
}