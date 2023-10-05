import CryptoJs from "crypto-js";
const key = "3B4DA7D1HE9EI6E9";

export const encrypt = (text: any) =>
  CryptoJs.AES.encrypt(JSON.stringify(text), key).toString();

export const decrypt = (crypted: any) =>
  JSON.parse(CryptoJs.AES.decrypt(crypted, key).toString(CryptoJs.enc.Utf8));
