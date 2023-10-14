import { OperationNames, TableData } from "@/services/medical-equipment/types";
import { gregorianIsoToJalaali } from "@/utills/formatHelper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TableBodyData = ({
  operationName,
  data,
}: {
  operationName: OperationNames;
  data: TableData | null;
}) => {
  if (data) {
    switch (operationName) {
      case "GetMedicalEquipmentDevices":
        return data.map((item, index) => (
          <tr className="" key={item.deviceId}>
            <td className="p-4 whitespace-nowrap text-[13px]">{index + 1}</td>
            <td className="p-4 whitespace-nowrap text-[13px]">{item.name}</td>
            <td className="whitespace-nowrap p-4 text-[14px]">{item.brand}</td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.country}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.companyName}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              <p className="w-fit bg-primaryLight text-primaryDark px-2 py-1 rounded-full">
                {item.orderedByMobileNumber}
              </p>
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              <Link
                className="w-fit bg-primaryLight text-primaryDark px-2 py-1 rounded-full underline"
                // target="_blank"
                href={`https://${item.website}` || "/"}
              >
                مشاهده
              </Link>
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              <Link
                className="w-fit bg-primaryLight text-primaryDark px-2 py-1 rounded-full underline"
                // target="_blank"
                href={item.imageUrl || "/"}
              >
                مشاهده تصویر
              </Link>
            </td>
          </tr>
        ));
      case "GetMedicalEquipmentCompanies":
        return data.map((item, index) => (
          <tr key={item.companyId}>
            <td className="whitespace-nowrap p-4 text-[14px]">{index + 1}</td>
            <td className="whitespace-nowrap p-4 text-[14px]">{item.name}</td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.managerFullName}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.faxNumber}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.address}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.phones.map((phone, index) => (
                <span
                  className="w-fit bg-primaryLight text-primaryDark px-2 py-1 rounded-full"
                  key={index}
                >
                  {phone}
                </span>
              ))}
            </td>
          </tr>
        ));
      case "GetDeansOfUniversities":
        return data.map((item, index) => (
          <tr key={item.id}>
            <td className="whitespace-nowrap p-4 text-[14px]">{index + 1}</td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.cityName}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.deanOfUniFullName}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.address}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.telephone}
            </td>
          </tr>
        ));
      case "GetEvents":
        return data.map((item, index) => (
          <tr key={item.id}>
            <td className="whitespace-nowrap p-4">{index + 1}</td>
            <td className="whitespace-nowrap p-4">{item.eventName}</td>
            <td className="whitespace-nowrap p-4">
              {gregorianIsoToJalaali(item.eventDate)}
            </td>
          </tr>
        ));
      case "GetHospotals":
        return data.map((item, index) => (
          <tr key={item.id}>
            <td className="whitespace-nowrap p-4 text-[14px]">{index + 1}</td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.cityName}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.hospitalName}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.category}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.coveredName}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.numberOfBeds}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.universityName}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.address}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.telephone}
            </td>
          </tr>
        ));
      case "GetLabs":
        return data.map((item, index) => (
          <tr key={item.id}>
            <td className="whitespace-nowrap p-4 text-[14px]">{index + 1}</td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.universityName}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.headOfLaboratory}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.address}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.telephone}
            </td>
          </tr>
        ));
      case "GetVicePresidentsOfTreatment":
        return data.map((item, index) => (
          <tr>
            <td className="whitespace-nowrap p-4 text-[14px]">{index + 1}</td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.universityName}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.vicePresident}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.telephone}
            </td>
          </tr>
        ));
      case "GetUniversities":
        return data.map((item, index) => (
          <tr>
            <td className="whitespace-nowrap p-4 text-[14px]">{index + 1}</td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.universityName}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.website}
            </td>
          </tr>
        ));
      case "HomePageDevices":
        return data.map((item, index) => (
          <tr>
            <td className="whitespace-nowrap p-4 text-[14px]">{index + 1}</td>
            <td className="whitespace-nowrap p-4 text-[14px]">{item.name}</td>
            <td className="whitespace-nowrap p-4 text-[14px]">{item.brand}</td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.country}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.companyName}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.orderedByMobileNumber}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              <Link
                className="w-fit bg-primaryLight text-primaryDark px-2 py-1 rounded-full underline"
                href={item.companyWebsite}
              >
                مشاهده
              </Link>
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              <Link
                className="w-fit bg-primaryLight text-primaryDark px-2 py-1 rounded-full underline"
                href={item.imageUrl}
              >
                مشاهده
              </Link>
            </td>
          </tr>
        ));
      case "GetCounsulations":
        return data.map((item, index) => (
          <tr key={index}>
            <td className="whitespace-nowrap p-4 text-[14px]">{index + 1}</td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.fullName}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.phoneNumber}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.comment}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {gregorianIsoToJalaali(item.creationDate)}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              <Link
                href={`callto:${item.phoneNumber}`}
                className="py-3 px-7 cursor-pointer text-primaryDark underline w-fit flex justify-center items-center rounded-full bg-primaryLight"
              >
                تماس
              </Link>
            </td>
          </tr>
        ));
      case "GetUsers":
        return data.map((item, index) => (
          <tr key={item.userId}>
            <td className="whitespace-nowrap p-4 text-[14px]">{index + 1}</td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.fullName}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.companyName}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.managerFullName}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.maxDeviceNumber}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.remainDeviceNumber}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              <Link
                href={`/panel/charge-account/single-user?userId=${item.userId}`}
                className="py-1 px-3 cursor-pointer text-primaryDark underline w-fit flex justify-center items-center rounded-full bg-primaryLight"
              >
                مشاهده
              </Link>
            </td>
          </tr>
        ));
      case "GetUserAcceptedDevices":
        return data.map((item, index) => (
          <tr key={item.deviceId}>
            <td className="whitespace-nowrap p-4 text-[14px]">{index + 1}</td>
            <td className="whitespace-nowrap p-4 text-[14px]">{item.name}</td>
            <td className="whitespace-nowrap p-4 text-[14px]">{item.brand}</td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.country}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.companyName}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.orderedByFullName}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.orderedByMobileNumber}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              <Link
                href={`/panel/charge-account/update-device?deviceId=${item.deviceId}`}
                className="py-1 px-3 cursor-pointer text-primaryDark underline w-fit flex justify-center items-center rounded-full bg-primaryLight"
              >
                مشاهده
              </Link>
            </td>
          </tr>
        ));
      case "GetProfileDevices":
        return data.map((item, index) => (
          <tr key={item.deviceId}>
            <td className="whitespace-nowrap p-4 text-[14px]">{index + 1}</td>
            <td className="whitespace-nowrap p-4 text-[14px]">{item.name}</td>
            <td className="whitespace-nowrap p-4 text-[14px]">{item.brand}</td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.country}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              <span className="py-1 px-3 text-primaryDark underline w-fit flex justify-center items-center rounded-full bg-primaryLight">
                {item.orderedByMobileNumber}
              </span>
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              <Link
                className="w-fit bg-primaryLight text-primaryDark px-2 py-1 rounded-full underline"
                target="_blank"
                href={item.imageUrl || ""}
              >
                مشاهده تصویر
              </Link>
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.stateCode ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    fill="#1DC9A0"
                    fill-opacity="0.15"
                    stroke="#1DC9A0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                    stroke="#1DC9A0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 7L11 11L15 7ZM11 11L7 15L11 11ZM11 11L7 7L11 11ZM11 11L15 15L11 11Z"
                    fill="#E21414"
                    fill-opacity="0.15"
                  />
                  <path
                    d="M15 7L11 11M11 11L7 15M11 11L7 7M11 11L15 15"
                    stroke="#E21414"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                    fill="#E21414"
                    fill-opacity="0.15"
                    stroke="#E21414"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </td>
          </tr>
        ));
    }
  }
};

export default TableBodyData;
