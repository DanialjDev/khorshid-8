import moment, { max } from "moment-jalaali";

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
  switch (id) {
    case 1:
      return "/devices";
    case 2:
      return "/companies";
    case 3:
      return "/deanes-of-universities";
    case 4:
      return "/events";
    case 5:
      return "/hospitals";
    case 6:
      return "/labs";
    case 7:
      return "/vice-president-of-treatments";
    case 8:
      return "/universities-sites";
  }
};

export const nonBreakingSpace = (str: string) => {
  return str.replace(/ /g, "\u00a0");
};
