import { Category } from "@/services/medical-equipment";

export const generateHeaders = (category: Category): string[] | undefined => {
  switch (category) {
    case "GetDevices":
      return [
        "نام دستگاه",
        "مارک دستگاه",
        "کشور سازنده",
        "شرکت نمایندگی",
        "شماره تماس",
        "لینک سایت",
        "تصاویر",
      ];
    case "GetCompanies":
      return ["نام شرکت", "نام مدیر عامل", "شماره فکس", "آدرس", "تلفن"];
    case "GetDeansOfUniversities":
      return ["دانشگاه های علوم پزشکی", "ریاست", "آدرس", "شماره تماس"];
    case "GetEvents":
      return ["نام روز", "تاریخ"];
    case "GetHospotals":
      return [
        "نام شهرستان",
        "نام بیمارستان",
        "نام رشته فعالیت",
        "نام تحت پوشش",
        "تعداد تخت ثابت",
        "نام دانشگاه ناظر",
        "آدرس",
        "شماره تماس",
      ];
    case "GetLabs":
      return ["نام دانشگاه", "مسئول امور آزمایشگاه ها", "آدرس", "شماره تماس"];
    case "GetUniversities":
      return ["نام دانشگاه / دانشکده", "آدرس سایت"];
    case "GetVicePresidentsOfTreatment":
      return ["نام دانشگاه / دانشکده", "معونت درمان", "شماره تماس"];
    case "ProfileDevices":
      return [
        "نام دستگاه",
        "مارک دستگاه",
        "کشور سازنده",
        "شماره تماس",
        "تصاویر",
        "وضعیت",
      ];
    case "panel_consulation":
      return [
        "نام و نام خانوادگی",
        "شماره تماس",
        "انتخاب واحد مشاوره",
        "تاریخ ثبت درخواست",
        "اطلاعات بیشتر",
      ];
    case "charge_account":
      return [
        "نام حساب کاربری",
        "نام شرکت",
        "نام مدیر عامل",
        "تعداد ظرفیت ",
        "تعداد ظرفیت باقی مانده",
        "اطلاعات بیشتر",
      ];
    case "GetUserAcceptedDevices":
      return [
        "نام دستگاه",
        "مارک دستگاه",
        "کشور سازنده",
        "شرکت نمایندگی",
        "نام سفارش دهنده",
        "تلفن سفارش دهنده",
        "اطلاعات بیشتر",
      ];
    case "GetRequestedDevices":
      return [
        "نام دستگاه",
        "مارک دستگاه",
        "کشور سازنده",
        "شرکت نمایندگی",
        "نام سفارش دهنده",
        "اطلاعات بیشتر",
        "عملیات تایید یا رد مرکز",
      ];
    default:
      return undefined;
  }
};
