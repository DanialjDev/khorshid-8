import { Category } from "@/services/medical-equipment";

export const generateHeaders = (
  category: Category
):
  | {
      name: string;
      value: string;
    }[]
  | undefined => {
  switch (category) {
    case "GetDevices":
      return [
        { name: "نام دستگاه", value: "Name" },
        {
          name: "مارک دستگاه",
          value: "Brand",
        },
        { name: "کشور سازنده", value: "Country" },
        { name: "شرکت نمایندگی", value: "CompanyName" },
        { name: "شماره تماس", value: "OrderedByMobileNumber" },
        { name: "لینک سایت", value: "Website" },
        { name: "تصاویر", value: "" },
      ];
    case "GetCompanies":
      return [
        { name: "نام شرکت", value: "Name" },
        { name: "نام مدیر عامل", value: "ManagerFullName" },
        { name: "شماره فکس", value: "FaxNumber" },
        { name: "آدرس", value: "Address" },
        { name: "تلفن", value: "" },
      ];
    case "GetDeansOfUniversities":
      return [
        { name: "دانشگاه های علوم پزشکی", value: "CityID" },
        { name: "ریاست", value: "DeanOfUniFullName" },
        { name: "آدرس", value: "Address" },
        { name: "شماره تماس", value: "Telephone" },
      ];
    case "GetEvents":
      return [
        { name: "نام روز", value: "EventName" },
        { name: "تاریخ", value: "EventDate" },
      ];
    case "GetHospotals":
      return [
        { name: "نام شهرستان", value: "CityId" },
        { name: "نام بیمارستان", value: "HospitalName" },
        { name: "نام رشته فعالیت", value: "Category" },
        { name: "نام تحت پوشش", value: "CoveredName" },
        { name: "تعداد تخت ثابت", value: "" },
        { name: "نام دانشگاه ناظر", value: "UniversityName" },
        { name: "آدرس", value: "Address" },
        { name: "شماره تماس", value: "Telephone" },
      ];
    case "GetLabs":
      return [
        { name: "نام دانشگاه", value: "UniversityName" },
        { name: "مسئول امور آزمایشگاه ها", value: "HeadOfLaboratory" },
        { name: "آدرس", value: "Address" },
        { name: "شماره تماس", value: "Telephone" },
      ];
    case "GetUniversities":
      return [
        { name: "نام دانشگاه / دانشکده", value: "UniversityName" },
        { name: "آدرس سایت", value: "Website" },
      ];
    case "GetVicePresidentsOfTreatment":
      return [
        { name: "نام دانشگاه / دانشکده", value: "UniversityName" },
        { name: "معونت درمان", value: "VicePresident" },
        { name: "شماره تماس", value: "Telephone" },
      ];
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
