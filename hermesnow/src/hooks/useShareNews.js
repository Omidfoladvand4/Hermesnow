import { useState, useEffect } from "react";

export const useShare = () => {
  const [isShareble, setIsShareble] = useState(false);
  const [shareLoading, setShareLoading] = useState(false);

  useEffect(() => {
    if (navigator.share) {
      setIsShareble(true);
    }
  }, []);

  const shareNews = async (news, url) => {
    setShareLoading(true);

    const shareData = {
      title: news.NewsTitle,
      text: news.NewsMainText,
      url: url,
    };

    try {
      await navigator.share(shareData);
    } catch (error) {
      console.log("خطا یا انصراف کاربر");
    } finally {
      setShareLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return { shareNews, copyToClipboard, isShareble, shareLoading };
};
