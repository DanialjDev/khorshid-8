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
        { name: "نام دستگاه", value: "" },
        { name: "مارک دستگاه", value: "" },
        { name: "کشور سازنده", value: "" },
        { name: "شماره تماس", value: "" },
        { name: "تصاویر", value: "" },
        { name: "وضعیت", value: "" },
      ];
    case "panel_consulation":
      return [
        { name: "نام و نام خانوادگی", value: "" },
        { name: "شماره تماس", value: "" },
        { name: "انتخاب واحد مشاوره", value: "" },
        { name: "تاریخ ثبت درخواست", value: "" },
        { name: "اطلاعات بیشتر", value: "" },
      ];
    case "charge_account":
      return [
        { name: "نام حساب کاربری", value: "" },
        { name: "نام شرکت", value: "" },
        { name: "نام مدیر عامل", value: "" },
        { name: "تعداد ظرفیت ", value: "" },
        { name: "تعداد ظرفیت باقی مانده", value: "" },
        { name: "اطلاعات بیشتر", value: "" },
      ];
    case "GetUserAcceptedDevices":
      return [
        { name: "نام دستگاه", value: "" },
        { name: "مارک دستگاه", value: "" },
        { name: "کشور سازنده", value: "" },
        { name: "شرکت نمایندگی", value: "" },
        { name: "نام سفارش دهنده", value: "" },
        { name: "تلفن سفارش دهنده", value: "" },
        { name: "اطلاعات بیشتر", value: "" },
      ];
    case "GetRequestedDevices":
      return [
        { name: "نام دستگاه", value: "" },
        { name: "مارک دستگاه", value: "" },
        { name: "کشور سازنده", value: "" },
        { name: "شرکت نمایندگی", value: "" },
        { name: "نام سفارش دهنده", value: "" },
        { name: "اطلاعات بیشتر", value: "" },
        { name: "عملیات تایید یا رد مرکز", value: "" },
      ];
    default:
      return undefined;
  }
};
