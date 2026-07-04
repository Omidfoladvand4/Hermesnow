import { supabase } from "../lib/supabaseClient";

const TABLE_NAME = "News";
const CACHE_KEY = "comments_cache";

// Cache management
const cache = {
  get: (newsId) => {
    const key = `${CACHE_KEY}_${newsId}`;
    const cached = sessionStorage.getItem(key);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      // Cache for 5 minutes
      if (Date.now() - timestamp < 5 * 60 * 1000) {
        return data;
      }
    }
    return null;
  },
  set: (newsId, data) => {
    const key = `${CACHE_KEY}_${newsId}`;
    sessionStorage.setItem(key, JSON.stringify({
      data,
      timestamp: Date.now()
    }));
  },
  clear: (newsId) => {
    const key = `${CACHE_KEY}_${newsId}`;
    sessionStorage.removeItem(key);
  }
};

export async function getComments(newsId, useCache = true) {
  // Check cache first
  if (useCache) {
    const cached = cache.get(newsId);
    if (cached) return cached;
  }

  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select("Comments")
    .eq("id", newsId)
    .single();

  if (error) {
    throw new Error(error.message || "خطا در ارتباط با سرور");
  }

  const comments = data?.Comments ?? [];
  
  // Cache the result
  cache.set(newsId, comments);
  
  return comments;
}

export async function addComment(newsId, comment) {
  // Get current comments
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select("Comments")
    .eq("id", newsId)
    .single();

  if (error) {
    throw new Error(error.message || "خطا در ارتباط با سرور");
  }

  const comments = data?.Comments ?? [];
  const updatedComments = [comment, ...comments];

  // Update database
  const { error: updateError } = await supabase
    .from(TABLE_NAME)
    .update({ Comments: updatedComments })
    .eq("id", newsId);

  if (updateError) {
    throw new Error(updateError.message || "خطا در ارتباط با سرور");
  }

  // Clear cache
  cache.clear(newsId);
  
  // Return updated comments
  return updatedComments;
}

// Utility to delete comment (if needed later)
export async function deleteComment(newsId, commentId) {
  const comments = await getComments(newsId, false);
  const updatedComments = comments.filter(c => c.id !== commentId);
  
  const { error } = await supabase
    .from(TABLE_NAME)
    .update({ Comments: updatedComments })
    .eq("id", newsId);

  if (error) {
    throw new Error(error.message || "خطا در حذف نظر");
  }

  cache.clear(newsId);
  return updatedComments;
}