import { Category } from "@/services/medical-equipment";
import {
  Company,
  MedicalDevice,
  MedicalDeviceTypes,
  MedicalDevices,
  OperationNames,
} from "@/services/medical-equipment/types";
import React, { ReactNode } from "react";

type Action = "GetMedicalEquipmentDevices";

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
    default:
      return undefined;
  }
};
