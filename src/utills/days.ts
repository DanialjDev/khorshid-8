export const getDatesRange = (date_1: Date, date_2: Date) => {
  let amoutString = "";
  const difference = date_1.getTime() - date_2.getTime();
  const days = Math.floor(difference / (1000 * 3600 * 24));
  //   console.log("Now", date_1.getTime());
  //   console.log("Creation", date_2.getTime());
  //   console.log(days);
  if (days >= 1 && days <= 6) {
    amoutString = `${days} روز پیش`;
  } else if (days >= 7 && days <= 13) {
    amoutString = `۱ هفته پیش`;
  } else if (days >= 14 && days <= 20) {
    amoutString = `‍‍۲ هفته پیش`;
  } else if (days >= 21 && days <= 27) {
    amoutString = `‍‍۳ هفته پیش`;
  } else if (days >= 28 && days <= 31) {
    amoutString = `‍‍۴ هفته پیش`;
  } else if (days >= 32 && days <= 60) {
    amoutString = "۱ ماه پیش";
  } else if (days >= 61 && days <= 90) {
    amoutString = "۲ ماه پیش";
  } else if (days >= 91 && days <= 120) {
    amoutString = "۳ ماه پیش";
  } else {
    amoutString = "بیش از ۳ ماه پیش";
  }

  return amoutString;
};
