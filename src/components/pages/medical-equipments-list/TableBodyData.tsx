import { setDeviceId } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
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
      case "GetDevices":
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
      case "GetCompanies":
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
    }
  }
};

export default TableBodyData;
