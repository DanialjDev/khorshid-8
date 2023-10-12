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
