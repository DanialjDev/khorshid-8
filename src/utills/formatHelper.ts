import { EndPoints } from "@/services/profile/admin/medical-equipments-list/types";
import moment from "moment-jalaali";

export const isNumeric = (string: string) => {
  return !string ? false : /^[0-9\b]+$/.test(string);
};
export const isMobile = (string: string) => {
  if (!string) {
    return false;
  }
  if (!isNumeric(string) || string.length !== 11 || !string.startsWith("09")) {
    return false;
  }
  return true;
};
export const isEmail = (email: string) => {
  return !email
    ? false
    : String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
export const isUrl = (url: string) => {
  return !url
    ? false
    : url
        .toLowerCase()
        .match(
          new RegExp(
            /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
          )
        );
};

export const jalaaliToGregorianISO = (str: string) => {
  try {
    return new Date(
      moment(str.toString(), "jYYYY/jM/jD").format("YYYY-MM-DD")
    ).toISOString();
  } catch (error) {
    return null;
  }
};
export const gregorianIsoToJalaali = (str: string) => {
  try {
    return moment(str.toString()).format("jYYYY/jMM/jDD");
  } catch (error) {
    return null;
  }
};

export const generateItemsDevicedBySix = (
  maxAmount: number
): number[] | null => {
  if (maxAmount % 6 === 0) {
    return [
      maxAmount / 6,
      (2 * maxAmount) / 6,
      (3 * maxAmount) / 6,
      (4 * maxAmount) / 6,
      (5 * maxAmount) / 6,
      maxAmount,
    ];
  } else {
    let number: number = maxAmount;

    while (number % 6 !== 0) {
      number++;
    }
    return [
      number / 6,
      (2 * number) / 6,
      (3 * number) / 6,
      (4 * number) / 6,
      (5 * number) / 6,
      number,
    ];
  }
};

export const getMedicalEquipmentsRoutes = (id: number): string | undefined => {
  console.log(id);
  switch (id) {
    case 9:
      return "/devices";
    case 10:
      return "/companies";
    case 11:
      return "/deans-of-universities";
    case 12:
      return "/events";
    case 12:
      return "/hospitals";
    case 14:
      return "/labs";
    case 15:
      return "/vice-president-of-treatments";
    case 16:
      return "/universities";
  }
  return undefined;
};

export const nonBreakingSpace = (str: string) => {
  return str.replace(/ /g, "\u00a0");
};

// generate Excel Post Data
export const generateData = (data: any, action: EndPoints) => {
  // @ts-ignore
  return data.map((item) => {
    switch (action) {
      case "GetDevices":
        return {
          companyName: Object.values(item)[0],
          name: Object.values(item)[1],
          brand: Object.values(item)[2],
          country: Object.values(item)[3],
          orderedByName: Object.values(item)[4],
          orderedByLastName: Object.values(item)[5],
          orderedByMobileNumber: Object.values(item)[6],
          // @ts-ignore
          categories: Object.values(item)[7].split("/"),
        };
      case "GetCompanies":
        return {
          name: Object.values(item)[0],
          managerFullName: Object.values(item)[1],
          faxNumber: Object.values(item)[2],
          address: Object.values(item)[3],
          website: Object.values(item)[4],
        };
      case "GetLabs":
        return {
          universityName: Object.values(item)[0],
          headOfLaboratory: Object.values(item)[1],
          address: Object.values(item)[2],
          telephone: Object.values(item)[3],
        };
      case "GetDeansOfUniversities":
        return {
          state: Object.values(item)[0],
          city: Object.values(item)[1],
          deanOfUniFullName: Object.values(item)[2],
          address: Object.values(item)[3],
          telephone: Object.values(item)[4],
        };
      case "GetHospitals":
        return {
          state: Object.values(item)[0],
          city: Object.values(item)[1],
          hospitalName: Object.values(item)[2],
          category: Object.values(item)[3],
          coveredName: Object.values(item)[4],
          numberOfBeds: Object.values(item)[5],
          universityName: Object.values(item)[6],
          address: Object.values(item)[7],
          telephone: Object.values(item)[8],
        };
      case "GetEvents":
        return {
          eventName: Object.values(item)[0],
          // @ts-ignore
          eventDate: jalaaliToGregorianISO(Object.values(item)[1]),
        };
      case "GetUniversities":
        return {
          universityName: Object.values(item)[0],
          website: Object.values(item)[1],
        };
      case "GetVicePresidentsOfTreatment":
        return {
          universityName: Object.values(item)[0],
          vicePresident: Object.values(item)[1],
          telephone: Object.values(item)[2],
        };
    }
  });
};

// generate Json to Excel
export const getExcelTitles = (action: EndPoints) => {
  switch (action) {
    case "GetDevices":
      return [
        "نام دستگاه",
        "مارک دستگاه",
        "کشور سازنده",
        "شرکت نمایندگی",
        "شماره تماس سفارش دهنده",
        "لینک سایت",
        "تصاویر",
      ];
    case "GetCompanies":
      return ["نام شرکت", "نام مدیر عامل", "آدرس", "تلفن"];
    case "GetDeansOfUniversities":
      return ["دانشگاه های علوم پزشکی", "ریاست", "آدرس", "شماره تماس"];
    case "GetEvents":
      return ["نام روز", "تاریخ"];
    case "GetHospitals":
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
      return ["نام داتشگاه", "مسئول امور آزمایشگاه ها", "آدرس", "شماره تماس"];
    case "GetVicePresidentsOfTreatment":
      return ["نام دانشگاه / دانشکده", "معونت درمان", "شماره تماس"];
    case "GetUniversities":
      return ["نام دانشگاه / دانشکده", "آدرس سایت"];
  }
};

export const jsonToExcel = (data: any, targetArray: any, action: EndPoints) => {
  console.log(action);
  switch (action) {
    case "GetDevices":
      // @ts-ignore
      data.forEach((item) => {
        targetArray.push([
          item.name,
          item.brand,
          item.country,
          item.companyName,
          item.orderedByMobileNumber,
          item.website,
          item.imageUrl ? item.imageUrl : "",
        ]);
      });
      break;
    case "GetCompanies":
      // @ts-ignore
      data.forEach((item) => {
        targetArray.push([
          item.name,
          item.managerFullName,
          item.address,
          // @ts-ignore
          item.faxNumber,
        ]);
      });
      break;

    case "GetDeansOfUniversities":
      // @ts-ignore
      data.forEach((item) => {
        targetArray.push([
          item.cityName,
          item.deanOfUniFullName,
          item.address,
          item.telephone,
        ]);
      });
      break;

    case "GetEvents":
      // @ts-ignore
      data.forEach((item) => {
        targetArray.push([
          item.eventName,
          gregorianIsoToJalaali(item.eventDate),
        ]);
      });
      break;

    case "GetHospitals":
      // @ts-ignore
      data.forEach((item) => {
        targetArray.push([
          item.cityName,
          item.hospitalName,
          item.category,
          item.coveredName,
          item.numberOfBeds,
          item.universityName,
          item.address,
          item.telephone,
        ]);
      });
      break;

    case "GetLabs":
      // @ts-ignore
      data.forEach((item) => {
        targetArray.push([
          item.universityName,
          item.headOfLaboratory,
          item.address,
          item.telephone,
        ]);
      });
      break;

    case "GetVicePresidentsOfTreatment":
      // @ts-ignore
      data.forEach((item) => {
        targetArray.push([
          item.universityName,
          item.vicePresident,
          item.telephone,
        ]);
      });
      break;

    case "GetUniversities":
      // @ts-ignore
      data.forEach((item) => {
        targetArray.push([item.universityName, item.website]);
      });
      break;
  }
  return targetArray;
};
