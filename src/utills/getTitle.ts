const titles: {
  home: string;
  "medical-equipments-list": string;
  "about-us": string;
  "contact-us": string;
  "medical-equipments-purchasing-expert": string;
  "register-medical-equipments-device": string;
  gallery: string;
  "medical-equipments-market": string;
  profile: string;
} = {
  home: "خانه",
  "medical-equipments-list": "لیست تجهیزات پزشکی",
  "about-us": "درباه ما",
  "contact-us": "ارتباط با ما",
  "medical-equipments-purchasing-expert": "کارشناس خرید تجهیزات پزشکی",
  "register-medical-equipments-device": "فرم ثبت دستگاه در سایت",
  "medical-equipments-market": "بازار تجهیزات پزشکی",
  gallery: "گالری تصاویر",
  profile: "پروفایل",
};

type Title =
  | "home"
  | "medical-equipments-list"
  | "about-us"
  | "contact-us"
  | "medical-equipments-purchasing-expert"
  | "register-medical-equipments-device"
  | "medical-equipments-market"
  | "gallery"
  | "profile";

export const getTitle = (key: Title) => titles[key];
