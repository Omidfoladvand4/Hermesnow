const PersianDate = (news) => {
  if (!news?.NewsDate) return "";

  const date = new Date(news.NewsDate);
  const persianDateRequarment = date.toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return persianDateRequarment;
};

export default PersianDate;
