import { OperationNames, TableData } from "@/services/medical-equipment/types";
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
            <td className="p-4 whitespace-nowrap">{index + 1}</td>
            <td className="p-4 whitespace-nowrap">{item.name}</td>
            <td className="whitespace-nowrap p-4">{item.brand}</td>
            <td className="whitespace-nowrap p-4">{item.country}</td>
            <td className="whitespace-nowrap p-4">{item.companyName}</td>
            <td className="whitespace-nowrap p-4">
              <p className="w-fit bg-primaryLight text-primaryDark px-2 py-1 rounded-full">
                {item.orderedByMobileNumber}
              </p>
            </td>
            <td className="whitespace-nowrap p-4">
              <Link
                className="w-fit bg-primaryLight text-primaryDark px-2 py-1 rounded-full underline"
                // target="_blank"
                href={`https://${item.website}` || "/"}
              >
                مشاهده
              </Link>
            </td>
            <td className="whitespace-nowrap p-4">
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
            <td className="whitespace-nowrap p-4">{index + 1}</td>
            <td className="whitespace-nowrap p-4">{item.name}</td>
            <td className="whitespace-nowrap p-4">{item.managerFullName}</td>
            <td className="whitespace-nowrap p-4">{item.faxNumber}</td>
            <td className="whitespace-nowrap p-4">{item.address}</td>
            <td className="whitespace-nowrap p-4">
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
            <td className="whitespace-nowrap p-4">{index + 1}</td>
            <td className="whitespace-nowrap p-4">{item.cityName}</td>
            <td className="whitespace-nowrap p-4">{item.deanOfUniFullName}</td>
            <td className="whitespace-nowrap p-4">{item.address}</td>
            <td className="whitespace-nowrap p-4">{item.telephone}</td>
          </tr>
        ));
      case "GetEvents":
        return data.map((item, index) => (
          <tr key={item.id}>
            <td className="whitespace-nowrap p-4">{index + 1}</td>
            <td className="whitespace-nowrap p-4">{item.eventName}</td>
            <td className="whitespace-nowrap p-4">{item.eventDate}</td>
          </tr>
        ));
      case "GetHospotals":
        return data.map((item, index) => (
          <tr key={item.id}>
            <td className="whitespace-nowrap p-4">{index + 1}</td>
            <td className="whitespace-nowrap p-4">{item.cityName}</td>
            <td className="whitespace-nowrap p-4">{item.hospitalName}</td>
            <td className="whitespace-nowrap p-4">{item.category}</td>
            <td className="whitespace-nowrap p-4">{item.coveredName}</td>
            <td className="whitespace-nowrap p-4">{item.numberOfBeds}</td>
            <td className="whitespace-nowrap p-4">{item.universityName}</td>
            <td className="whitespace-nowrap p-4">{item.address}</td>
            <td className="whitespace-nowrap p-4">{item.telephone}</td>
          </tr>
        ));
      case "GetLabs":
        return data.map((item, index) => (
          <tr key={item.id}>
            <td className="whitespace-nowrap p-4">{index + 1}</td>
            <td className="whitespace-nowrap p-4">{item.universityName}</td>
            <td className="whitespace-nowrap p-4">{item.headOfLaboratory}</td>
            <td className="whitespace-nowrap p-4">{item.address}</td>
            <td className="whitespace-nowrap p-4">{item.telephone}</td>
          </tr>
        ));
      case "GetVicePresidentsOfTreatment":
        return data.map((item, index) => (
          <tr>
            <td className="whitespace-nowrap p-4">{index + 1}</td>
            <td className="whitespace-nowrap p-4">{item.universityName}</td>
            <td className="whitespace-nowrap p-4">{item.vicePresident}</td>
            <td className="whitespace-nowrap p-4">{item.telephone}</td>
          </tr>
        ));
      case "GetUniversities":
        return data.map((item, index) => (
          <tr>
            <td className="whitespace-nowrap p-4">{index + 1}</td>
            <td className="whitespace-nowrap p-4">{item.universityName}</td>
            <td className="whitespace-nowrap p-4">{item.website}</td>
          </tr>
        ));
      case "HomePageDevices":
        return data.map((item, index) => (
          <tr>
            <td className="whitespace-nowrap p-4">{index + 1}</td>
            <td className="whitespace-nowrap p-4">{item.name}</td>
            <td className="whitespace-nowrap p-4">{item.brand}</td>
            <td className="whitespace-nowrap p-4">{item.country}</td>
            <td className="whitespace-nowrap p-4">{item.companyName}</td>
            <td className="whitespace-nowrap p-4">
              {item.orderedByMobileNumber}
            </td>
            <td className="whitespace-nowrap p-4">
              <Link
                className="w-fit bg-primaryLight text-primaryDark px-2 py-1 rounded-full underline"
                href={item.companyWebsite}
              >
                مشاهده
              </Link>
            </td>
            <td className="whitespace-nowrap p-4">
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
          <tr>
            <td className="whitespace-nowrap p-4">{index + 1}</td>
            <td className="whitespace-nowrap p-4">{item.fullName}</td>
            <td className="whitespace-nowrap p-4">{item.phoneNumber}</td>
            <td className="whitespace-nowrap p-4">{item.comment}</td>
            <td className="whitespace-nowrap p-4">{item.creationDate}</td>
            <td className="whitespace-nowrap p-4">
              <p className="py-3 px-7 cursor-pointer text-primaryDark underline w-fit flex justify-center items-center rounded-full bg-primaryLight">
                تماس
              </p>
            </td>
          </tr>
        ));
    }
  }
};

export default TableBodyData;

// const TableBodyData = (operationName: OperationNames, data: TableData) => {
//   switch(operationName) {
//     case 'GetMedicalEquipmentDevices':
//       return
//   }
// }

// export default TableBodyData;
