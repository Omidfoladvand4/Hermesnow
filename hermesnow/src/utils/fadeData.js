// data/fakeNewsData.js
export const fakeNewsData = [
  {
    id: 1,
    date: "۱۴۰۲/۱۰/۱۵",
    time: "۱۰:۳۰",
    title: "پیروزی تاریخی تیم ملی فوتبال در جام جهانی",
    subject: "ورزشی",
    content: [
      { type: "h2", data: "شروع مسابقه حساس" },
      { type: "p", data: "تیم ملی فوتبال ایران در یک بازی تاریخی و به یاد ماندنی، موفق به شکست حریف سرسخت خود شد." },
      { type: "image", data: "/images/news/match-1.jpg", caption: "صحنه ای از گل اول تیم ملی" }
    ],
    mainText: "تیم ملی فوتبال ایران با نتیجه ۳-۱ برزیل را شکست داد.",
    mainImage: "/images/HermesNowBannar.jpg",
    country: "ایران",
    author: "احمد محمدی",
    comments: [
      { id: 1, user: "کاربر۱", text: "چه بازی فوق العاده‌ای!", time: "۱۰:۴۵" }
    ],
    likes: 1250,
    isOver18: false,
    video: "/videos/full-match.mp4"
  },
  {
    id: 2,
    date: "۱۴۰۲/۱۰/۱۴",
    time: "۱۴:۱۵",
    title: "کشف داروی جدید برای درمان سرطان",
    subject: "علمی",
    content: [
      { type: "h2", data: "دستاورد بزرگ محققان ایرانی" },
      { type: "p", data: "گروهی از محققان دانشگاه تهران موفق به کشف داروی جدیدی برای درمان سرطان شده‌اند." }
    ],
    mainText: "محققان ایرانی داروی جدیدی برای درمان سرطان کشف کرده‌اند.",
    mainImage: "/images/HermesNowBannar.jpg",
    country: "ایران",
    author: "دکتر فاطمه کریمی",
    comments: [],
    likes: 890,
    isOver18: false,
    video: null
  },
  {
    id: 3,
    date: "۱۴۰۲/۱۰/۱۳",
    time: "۲۱:۴۵",
    title: "حادثه تروریستی در پایتخت",
    subject: "سیاسی",
    content: [
      { type: "h2", data: "جزئیات حادثه" },
      { type: "p", data: "ساعاتی پیش یک حادثه تروریستی در مرکز شهر رخ داد." }
    ],
    mainText: "حادثه تروریستی در مرکز شهر منجر به شهادت چند تن شد.",
    mainImage: "/images/HermesNowBannar.jpg",
    country: "ایران",
    author: "مهدی رضایی",
    comments: [],
    likes: 340,
    isOver18: true,
    video: null
  },
  {
    id: 4,
    date: "۱۴۰۲/۱۰/۱۲",
    time: "۰۸:۲۰",
    title: "رونمایی از جدیدترین گوشی هوشمند",
    subject: "تکنولوژی",
    content: [
      { type: "h2", data: "مشخصات فنی" },
      { type: "p", data: "شرکت سامسونگ از جدیدترین گوشی هوشمند خود رونمایی کرد." }
    ],
    mainText: "سامسونگ از گوشی جدید خود با دوربین ۲۰۰ مگاپیکسلی رونمایی کرد.",
    mainImage: "/images/HermesNowBannar.jpg",
    country: "کره جنوبی",
    author: "علی نوری",
    comments: [
      { id: 1, user: "تکنولوژی", text: "قیمتش چنده؟", time: "۰۹:۱۵" }
    ],
    likes: 670,
    isOver18: false,
    video: "/videos/phone-launch.mp4"
  },
  {
    id: 5,
    date: "۱۴۰۲/۱۰/۱۱",
    time: "۱۶:۱۰",
    title: "سقوط بازار سهام در بورس تهران",
    subject: "اقتصادی",
    content: [
      { type: "h2", data: "علل کاهش شاخص" },
      { type: "p", data: "شاخص بورس تهران امروز با کاهش ۲ درصدی مواجه شد." }
    ],
    mainText: "بورس تهران امروز شاهد کاهش قابل توجه شاخص بود.",
    mainImage: "/images/HermesNowBannar.jpg",
    country: "ایران",
    author: "رضا حسینی",
    comments: [],
    likes: 230,
    isOver18: false,
    video: null
  },
  {
    id: 6,
    date: "۱۴۰۲/۱۰/۱۰",
    time: "۱۲:۴۵",
    title: "افتتاح خط جدید مترو در تهران",
    subject: "شهری",
    content: [
      { type: "h2", data: "مسیر جدید مترو" },
      { type: "p", data: "خط جدید متروی تهران امروز با حضور شهردار افتتاح شد." }
    ],
    mainText: "خط ۷ متروی تهران پس از ۵ سال به بهره‌برداری رسید.",
    mainImage: "/images/HermesNowBannar.jpg",
    country: "ایران",
    author: "محمد تقوی",
    comments: [
      { id: 1, user: "تهرانی", text: "عالی شد!", time: "۱۳:۲۰" }
    ],
    likes: 540,
    isOver18: false,
    video: "/videos/metro-opening.mp4"
  },
  {
    id: 7,
    date: "۱۴۰۲/۱۰/۰۹",
    time: "۲۰:۳۰",
    title: "برگزاری جشنواره فیلم فجر",
    subject: "فرهنگی",
    content: [
      { type: "h2", data: "آغاز جشنواره" },
      { type: "p", data: "سی و دومین دوره جشنواره فیلم فجر امروز آغاز به کار کرد." }
    ],
    mainText: "جشنواره فیلم فجر با حضور فیلم‌سازان مطرح آغاز شد.",
    mainImage: "/images/HermesNowBannar.jpg",
    country: "ایران",
    author: "سارا محمدی",
    comments: [],
    likes: 780,
    isOver18: false,
    video: null
  },
  {
    id: 8,
    date: "۱۴۰۲/۱۰/۰۸",
    time: "۰۹:۱۵",
    title: "کشف گنجینه تاریخی در همدان",
    subject: "تاریخی",
    content: [
      { type: "h2", data: "کشف بی‌سابقه" },
      { type: "p", data: "باستان‌شناسان موفق به کشف گنجینه‌ای از دوره هخامنشی شدند." }
    ],
    mainText: "گنجینه‌ای تاریخی در محوطه باستانی هگمتانه کشف شد.",
    mainImage: "/images/HermesNowBannar.jpg",
    country: "ایران",
    author: "دکتر علی‌رضایی",
    comments: [
      { id: 1, user: "تاریخ‌دوست", text: "چه کشف بزرگی!", time: "۱۰:۰۰" }
    ],
    likes: 920,
    isOver18: false,
    video: "/videos/treasure-discovery.mp4"
  },
  {
    id: 9,
    date: "۱۴۰۲/۱۰/۰۷",
    time: "۱۷:۴۰",
    title: "طوفان شدید در شمال کشور",
    subject: "آب و هوا",
    content: [
      { type: "h2", data: "هشدار هواشناسی" },
      { type: "p", data: "طوفان شدید در استان‌های شمالی خسارات زیادی به بار آورد." }
    ],
    mainText: "طوفان شدید در شمال کشور باعث قطعی برق و تخریب منازل شد.",
    mainImage: "/images/HermesNowBannar.jpg",
    country: "ایران",
    author: "نادر کمالی",
    comments: [],
    likes: 310,
    isOver18: false,
    video: null
  },
  {
    id: 10,
    date: "۱۴۰۲/۱۰/۰۶",
    time: "۱۴:۲۰",
    title: "افتتاح بیمارستان تخصصی در مشهد",
    subject: "سلامت",
    content: [
      { type: "h2", data: "امکانات بیمارستان" },
      { type: "p", data: "بیمارستان تخصصی قلب در مشهد با حضور وزیر بهداشت افتتاح شد." }
    ],
    mainText: "بیمارستان تخصصی قلب مشهد با پیشرفته‌ترین تجهیزات آغاز به کار کرد.",
    mainImage: "/images/HermesNowBannar.jpg",
    country: "ایران",
    author: "دکتر مریم نجفی",
    comments: [
      { id: 1, user: "مهدوی", text: "خبر خوبی برای بیماران قلبی", time: "۱۵:۱۰" }
    ],
    likes: 650,
    isOver18: false,
    video: "/videos/hospital-opening.mp4"
  },
  // ادامه 40 خبر دیگر...
  {
    id: 11,
    date: "۱۴۰۲/۱۰/۰۵",
    time: "۱۱:۳۰",
    title: "اجرای کنسرت خواننده پاپ در تهران",
    subject: "موسیقی",
    mainText: "کنسرت خواننده محبوب پاپ در استادیوم آزادی برگزار شد.",
    mainImage: "/images/HermesNowBannar.jpg",
    country: "ایران",
    author: "کیمیا احمدی",
    comments: [],
    likes: 1200,
    isOver18: false,
    video: null
  },
  {
    id: 12,
    date: "۱۴۰۲/۱۰/۰۴",
    time: "۱۹:۱۵",
    title: "انتشار کتاب جدید رمان نویس معروف",
    subject: "ادبیات",
    mainText: "کتاب جدید نویسنده مشهور با استقبال خوبی مواجه شد.",
    mainImage: "/images/HermesNowBannar.jpg",
    country: "ایران",
    author: "نویسنده خبر",
    comments: [],
    likes: 430,
    isOver18: false,
    video: null
  },
  {
    id: 13,
    date: "۱۴۰۲/۱۰/۰۳",
    time: "۰۸:۴۵",
    title: "پرواز اولین هواپیمای ساخت ایران",
    subject: "هوانوردی",
    mainText: "اولین هواپیمای ساخت ایران با موفقیت پرواز آزمایشی انجام داد.",
    mainImage: "/images/HermesNowBannar.jpg",
    country: "ایران",
    author: "مهندس aviation",
    comments: [],
    likes: 1500,
    isOver18: false,
    video: "/videos/airplane-test.mp4"
  },
  {
    id: 14,
    date: "۱۴۰۲/۱۰/۰۲",
    time: "۱۶:۲۰",
    title: "برنده شدن دانشمند ایرانی در جایزه نوبل",
    subject: "علمی",
    mainText: "دانشمند ایرانی برنده جایزه نوبل فیزیک شد.",
    mainImage: "/images/HermesNowBannar.jpg",
    country: "ایران",
    author: "پروفسور رضوی",
    comments: [],
    likes: 2100,
    isOver18: false,
    video: null
  },
  {
    id: 15,
    date: "۱۴۰۲/۱۰/۰۱",
    time: "۱۳:۱۰",
    title: "آتش‌سوزی در جنگل‌های شمال",
    subject: "محیط زیست",
    mainText: "آتش‌سوزی گسترده در جنگل‌های شمال مهار شد.",
    mainImage: "/images/HermesNowBannar.jpg",
    country: "ایران",
    author: "محیط بان",
    comments: [],
    likes: 380,
    isOver18: false,
    video: null
  },
  // 35 خبر دیگر به همین صورت...
  {
    id: 16, date: "۱۴۰۲/۰۹/۳۰", time: "۱۰:۲۵", title: "رکوردشکنی در تولید گندم", subject: "کشاورزی", mainText: "ایران در تولید گندم به خودکفایی کامل رسید.", mainImage: "/images/HermesNowBannar.jpg", country: "ایران", author: "مهندس کشاورزی", comments: [], likes: 720, isOver18: false, video: null },
  {
    id: 17, date: "۱۴۰۲/۰۹/۲۹", time: "۱۵:۴۰", title: "کشف شبکه قاچاق انسان", subject: "امنیتی", mainText: "شبکه بزرگ قاچاق انسان در مرز غربی منهدم شد.", mainImage: "/images/HermesNowBannar.jpg", country: "ایران", author: "مامور امنیتی", comments: [], likes: 290, isOver18: true, video: null },
  {
    id: 18, date: "۱۴۰۲/۰۹/۲۸", time: "۲۰:۱۵", title: "جشنواره غذای محلی در اصفهان", subject: "غذا", mainText: "جشنواره غذاهای محلی در اصفهان برگزار شد.", mainImage: "/images/HermesNowBannar.jpg", country: "ایران", author: "سرآشپز", comments: [], likes: 890, isOver18: false, video: "/videos/food-festival.mp4" },
  {
    id: 19, date: "۱۴۰۲/۰۹/۲۷", time: "۰۹:۵۰", title: "افتتاح کارخانه جدید خودروسازی", subject: "صنعت", mainText: "کارخانه جدید خودروسازی با حضور رئیس‌جمهور افتتاح شد.", mainImage: "/images/HermesNowBannar.jpg", country: "ایران", author: "مهندس صنعت", comments: [], likes: 610, isOver18: false, video: null },
  {
    id: 20, date: "۱۴۰۲/۰۹/۲۶", time: "۱۸:۳۰", title: "برگزاری مسابقات شنا قهرمانی", subject: "ورزشی", mainText: "مسابقات قهرمانی شنا در تهران برگزار شد.", mainImage: "/images/HermesNowBannar.jpg", country: "ایران", author: "مربی شنا", comments: [], likes: 340, isOver18: false, video: "/videos/swimming-competition.mp4" },
  // ادامه تا 50...
  {
    id: 21, date: "۱۴۰۲/۰۹/۲۵", time: "۱۴:۲۰", title: "نمایشگاه بین‌المللی کتاب تهران", subject: "فرهنگی", mainText: "سی و پنجمین نمایشگاه بین‌المللی کتاب تهران آغاز به کار کرد.", mainImage: "/images/slideImage-1.jpg", country: "ایران", author: "کتابدار", comments: [], likes: 950, isOver18: false, video: null },
  {
    id: 22, date: "۱۴۰۲/۰۹/۲۴", time: "۱۱:۱۰", title: "زلزله در کرمانشاه", subject: "حوادث", mainText: "زلزله ۵.۵ ریشتری در کرمانشاه خسارت‌های جانی نداشت.", mainImage: "/images/slideImage-1.jpg", country: "ایران", author: "مامور هلال احمر", comments: [], likes: 420, isOver18: false, video: null },
  {
    id: 23, date: "۱۴۰۲/۰۹/۲۳", time: "۱۶:۴۵", title: "افتتاح پارک علم و فناوری", subject: "تکنولوژی", mainText: "پارک علم و فناوری در شیراز افتتاح شد.", mainImage: "/images/slideImage-1.jpg", country: "ایران", author: "مدیر فناوری", comments: [], likes: 580, isOver18: false, video: "/videos/tech-park.mp4" },
  {
    id: 24, date: "۱۴۰۲/۰۹/۲۲", time: "۲۱:۲۰", title: "کشف محموله مواد مخدر در خلیج فارس", subject: "امنیتی", mainText: "محموله بزرگ مواد مخدر در آب‌های خلیج فارس توقیف شد.", mainImage: "/images/slideImage-1.jpg", country: "ایران", author: "مامور انتظامی", comments: [], likes: 370, isOver18: true, video: null },
  {
    id: 25, date: "۱۴۰۲/۰۹/۲۱", time: "۰۸:۳۵", title: "جشنواره گل و گیاه در مازندران", subject: "طبیعت", mainText: "جشنواره گل و گیاه در رامسر برگزار شد.", mainImage: "/images/slideImage-1.jpg", country: "ایران", author: "گلکار", comments: [], likes: 690, isOver18: false, video: "/videos/flower-festival.mp4" },
  // 25 خبر دیگر...
  {
    id: 26, date: "۱۴۰۲/۰۹/۲۰", time: "۱۳:۵۰", title: "افتتاح خط تولید واکسن جدید", subject: "سلامت", mainText: "خط تولید واکسن جدید در مؤسسه رازی راه‌اندازی شد.", mainImage: "/images/slideImage-1.jpg", country: "ایران", author: "پژوهشگر", comments: [], likes: 810, isOver18: false, video: null },
  {
    id: 27, date: "۱۴۰۲/۰۹/۱۹", time: "۱۹:۲۵", title: "مسابقات بین‌المللی شطرنج", subject: "ورزشی", mainText: "قهرمان شطرنج ایران در مسابقات بین‌المللی مدال طلا گرفت.", mainImage: "/images/slideImage-1.jpg", country: "ایران", author: "استاد شطرنج", comments: [], likes: 530, isOver18: false, video: null },
  {
    id: 28, date: "۱۴۰۲/۰۹/۱۸", time: "۱۰:۱۵", title: "کشف سایت شرط‌بندی غیرقانونی", subject: "امنیتی", mainText: "شبکه بزرگ شرط‌بندی غیرقانونی در تهران منهدم شد.", mainImage: "/images/slideImage-1.jpg", country: "ایران", author: "مامور پلیس", comments: [], likes: 260, isOver18: true, video: null },
  {
    id: 29, date: "۱۴۰۲/۰۹/۱۷", time: "۱۵:۴۰", title: "جشنواره فیلم‌های کوتاه", subject: "سینما", mainText: "جشنواره فیلم‌های کوتاه در حوزه سینمای جوان برگزار شد.", mainImage: "/images/slideImage-2.jpg", country: "ایران", author: "فیلم‌ساز", comments: [], likes: 470, isOver18: false, video: "/videos/short-film.mp4" },
  {
    id: 30, date: "۱۴۰۲/۰۹/۱۶", time: "۲۲:۱۰", title: "پرتاب ماهواره جدید", subject: "فضا", mainText: "ماهواره جدید ایران با موفقیت در مدار قرار گرفت.", mainImage: "/images/slideImage-2.jpg", country: "ایران", author: "مهندس فضایی", comments: [], likes: 1400, isOver18: false, video: "/videos/satellite-launch.mp4" },
  // 20 خبر دیگر...
  {
    id: 31, date: "۱۴۰۲/۰۹/۱۵", time: "۰۷:۳۰", title: "افتتاح دانشگاه جدید در سیستان و بلوچستان", subject: "آموزش", mainText: "دانشگاه جدید در زاهدان آغاز به کار کرد.", mainImage: "/images/slideImage-2.jpg", country: "ایران", author: "استاد دانشگاه", comments: [], likes: 590, isOver18: false, video: null },
  {
    id: 32, date: "۱۴۰۲/۰۹/۱۴", time: "۱۲:۲۰", title: "کشف گورستان تاریخی", subject: "باستان‌شناسی", mainText: "گورستان تاریخی در شوش کشف شد.", mainImage: "/images/slideImage-2.jpg", country: "ایران", author: "باستان‌شناس", comments: [], likes: 680, isOver18: false, video: null },
  {
    id: 33, date: "۱۴۰۲/۰۹/۱۳", time: "۱۷:۵۵", title: "برگزاری ماراتون بین‌المللی", subject: "ورزشی", mainText: "ماراتون بین‌المللی تهران با حضور ورزشکاران خارجی برگزار شد.", mainImage: "/images/slideImage-2.jpg", country: "ایران", author: "دونده", comments: [], likes: 420, isOver18: false, video: "/videos/marathon.mp4" },
  {
    id: 34, date: "۱۴۰۲/۰۹/۱۲", time: "۲۳:۴۰", title: "آلودگی هوای تهران", subject: "محیط زیست", mainText: "تهران امروز در شرایط ناسالم برای گروه‌های حساس قرار دارد.", mainImage: "/images/slideImage-2.jpg", country: "ایران", author: "کارشناس محیط زیست", comments: [], likes: 350, isOver18: false, video: null },
  {
    id: 35, date: "۱۴۰۲/۰۹/۱۱", time: "۰۹:۱۰", title: "افتتاح مرکز داده‌های بزرگ", subject: "تکنولوژی", mainText: "مرکز داده‌های بزرگ (Big Data) در ایران راه‌اندازی شد.", mainImage: "/images/slideImage-2.jpg", country: "ایران", author: "متخصص IT", comments: [], likes: 720, isOver18: false, video: null },
  // 15 خبر دیگر...
  {
    id: 36, date: "۱۴۰۲/۰۹/۱۰", time: "۱۴:۳۵", title: "جشنواره موسیقی اصیل ایرانی", subject: "موسیقی", mainText: "جشنواره موسیقی اصیل ایرانی در تالار وحدت برگزار شد.", mainImage: "/images/slideImage-2.jpg", country: "ایران", author: "موسیقیدان", comments: [], likes: 610, isOver18: false, video: "/videos/music-festival.mp4" },
  {
    id: 37, date: "۱۴۰۲/۰۹/۰۹", time: "۲۰:۲۰", title: "کشف گونه جدید جانوری", subject: "محیط زیست", mainText: "گونه جدیدی از خزندگان در جنگل‌های شمال کشف شد.", mainImage: "/images/slideImage-5.jpg", country: "ایران", author: "جانورشناس", comments: [], likes: 830, isOver18: false, video: null },
  {
    id: 38, date: "۱۴۰۲/۰۹/۰۸", time: "۱۱:۴۵", title: "افتتاح پل معلق در البرز", subject: "عمران", mainText: "پل معلق جدید در استان البرز افتتاح شد.", mainImage: "/images/slideImage-5.jpg", country: "ایران", author: "مهندس عمران", comments: [], likes: 490, isOver18: false, video: "/videos/bridge-opening.mp4" },
  {
    id: 39, date: "۱۴۰۲/۰۹/۰۷", time: "۱۶:۳۰", title: "برگزاری نمایشگاه خودرو", subject: "خودرو", mainText: "نمایشگاه بین‌المللی خودروی تهران آغاز به کار کرد.", mainImage: "/images/slideImage-5.jpg", country: "ایران", author: "کارشناس خودرو", comments: [], likes: 1100, isOver18: false, video: null },
  {
    id: 40, date: "۱۴۰۲/۰۹/۰۶", time: "۲۱:۱۵", title: "کشف شبکه کلاهبرداری اینترنتی", subject: "امنیت سایبری", mainText: "شبکه بزرگ کلاهبرداری اینترنتی در کشور کشف شد.", mainImage: "/images/slideImage-5.jpg", country: "ایران", author: "کارشناس امنیت", comments: [], likes: 320, isOver18: false, video: null },
  // 10 خبر دیگر...
  {
    id: 41, date: "۱۴۰۲/۰۹/۰۵", time: "۰۸:۵۰", title: "افتتاح مجتمع تجاری بزرگ", subject: "اقتصاد", mainText: "مجتمع تجاری بزرگ در اصفهان افتتاح شد.", mainImage: "/images/slideImage-5.jpg", country: "ایران", author: "بازرگان", comments: [], likes: 540, isOver18: false, video: null },
  {
    id: 42, date: "۱۴۰۲/۰۹/۰۴", time: "۱۳:۲۵", title: "برگزاری مسابقات قرآن", subject: "مذهبی", mainText: "مسابقات بین‌المللی قرآن در تهران برگزار شد.", mainImage: "/images/slideImage-5.jpg", country: "ایران", author: "قاری", comments: [], likes: 920, isOver18: false, video: "/videos/quran-competition.mp4" },
  {
    id: 43, date: "۱۴۰۲/۰۹/۰۳", time: "۱۸:۴۰", title: "کشف معدن طلای جدید", subject: "معادن", mainText: "معدن طلای جدید در استان کرمان کشف شد.", mainImage: "/images/slideImage-5.jpg", country: "ایران", author: "زمین‌شناس", comments: [], likes: 760, isOver18: false, video: null },
  {
    id: 44, date: "۱۴۰۲/۰۹/۰۲", time: "۲۳:۲۰", title: "افتتاح هتل ۵ ستاره", subject: "گردشگری", mainText: "هتل ۵ ستاره جدید در کیش افتتاح شد.", mainImage: "/images/slideImage-5.jpg", country: "ایران", author: "مدیر هتل", comments: [], likes: 480, isOver18: false, video: "/videos/hotel-opening.mp4" },
  {
    id: 45, date: "۱۴۰۲/۰۹/۰۱", time: "۱۰:۱۰", title: "برگزاری کنفرانس انرژی‌های تجدیدپذیر", subject: "انرژی", mainText: "کنفرانس بین‌المللی انرژی‌های تجدیدپذیر در تهران برگزار شد.", mainImage: "/images/slideImage-5.jpg", country: "ایران", author: "متخصص انرژی", comments: [], likes: 670, isOver18: false, video: null },
  // 5 خبر پایانی...
  {
    id: 46, date: "۱۴۰۲/۰۸/۳۰", time: "۱۵:۳۵", title: "افتتاح بیمارستان کودکان", subject: "سلامت", mainText: "بیمارستان تخصصی کودکان در تبریز افتتاح شد.", mainImage: "/images/slideImage-5.jpg", country: "ایران", author: "پزشک اطفال", comments: [], likes: 750, isOver18: false, video: null },
  {
    id: 47, date: "۱۴۰۲/۰۸/۲۹", time: "۲۰:۵۰", title: "کشف محموله عتیقه‌جات", subject: "فرهنگی", mainText: "محموله بزرگ عتیقه‌جات در مرز ترکیه توقیف شد.", mainImage: "/images/slideImage-5.jpg", country: "ایران", author: "کارشناس میراث فرهنگی", comments: [], likes: 390, isOver18: false, video: null },
  {
    id: 48, date: "۱۴۰۲/۰۸/۲۸", time: "۱۲:۱۵", title: "برگزاری جشنواره نوروزی", subject: "فرهنگی", mainText: "جشنواره نوروزی در میدان نقش جهان اصفهان برگزار شد.", mainImage: "/images/slideImage-3.jpg", country: "ایران", author: "منتقد فرهنگی", comments: [], likes: 880, isOver18: false, video: "/videos/nowruz-festival.mp4" },
  {
    id: 49, date: "۱۴۰۲/۰۸/۲۷", time: "۱۷:۴۰", title: "افتتاح کارخانه بازیافت", subject: "محیط زیست", mainText: "کارخانه بازیافت پسماند در شیراز افتتاح شد.", mainImage: "/images/slideImage-3.jpg", country: "ایران", author: "مهندس محیط زیست", comments: [], likes: 520, isOver18: false, video: null },
  {
    id: 50, date: "۱۴۰۲/۰۸/۲۶", time: "۲۲:۲۵", title: "برگزاری مسابقات تنیس", subject: "ورزشی", mainText: "مسابقات تنیس قهرمانی کشور در تهران برگزار شد.", mainImage: "/images/slideImage-3.jpg", country: "ایران", author: "مربی تنیس", comments: [], likes: 430, isOver18: false, video: "/videos/tennis-match.mp4" }
];