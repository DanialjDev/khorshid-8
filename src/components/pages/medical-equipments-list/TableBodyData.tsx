import { OperationNames, TableData } from "@/services/medical-equipment/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TableBodyData = ({
  operationName,
  data,
}: {
  operationName: OperationNames;
  data: TableData;
}) => {
  switch (operationName) {
    case "GetMedicalEquipmentDevices":
      return data.map((item, index) => (
        <tr className="" key={item.deviceId}>
          <td className="!px-3 py-5">{index + 1}</td>
          <td className="p-2">{item.name}</td>
          <td>{item.brand}</td>
          <td>{item.country}</td>
          <td>{item.companyName}</td>
          <td className="">
            <p className="w-fit bg-primaryLight text-primaryDark px-2 py-1 rounded-full">
              {item.orderedByMobileNumber}
            </p>
          </td>
          <td>
            <Link
              className="w-fit bg-primaryLight text-primaryDark px-2 py-1 rounded-full underline"
              // target="_blank"
              href={`https://${item.website}` || "/"}
            >
              مشاهده
            </Link>
          </td>
          <td>
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
          <td className="px-3 py-5">{index + 1}</td>
          <td className="">{item.name}</td>
          <td className="">{item.managerFullName}</td>
          <td className="">{item.faxNumber}</td>
          <td className="">{item.address}</td>
          <td className="">
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
          <td className="px-3 py-5">{index + 1}</td>
          <td>{item.cityName}</td>
          <td>{item.deanOfUniFullName}</td>
          <td>{item.address}</td>
          <td>{item.telephone}</td>
        </tr>
      ));
    case "GetEvents":
      return data.map((item, index) => (
        <tr key={item.id}>
          <td className="px-3 py-5">{index + 1}</td>
          <td>{item.eventName}</td>
          <td>{item.eventDate}</td>
        </tr>
      ));
    case "GetHospotals":
      return data.map((item, index) => (
        <tr key={item.id}>
          <td className="px-3 py-5">{index + 1}</td>
          <td>{item.cityName}</td>
          <td>{item.hospitalName}</td>
          <td>{item.category}</td>
          <td>{item.coveredName}</td>
          <td>{item.numberOfBeds}</td>
          <td>{item.universityName}</td>
          <td>{item.address}</td>
          <td>{item.telephone}</td>
        </tr>
      ));
    case "GetLabs":
      return data.map((item, index) => (
        <tr key={item.id}>
          <td className="px-3 py-5">{index + 1}</td>
          <td>{item.universityName}</td>
          <td>{item.headOfLaboratory}</td>
          <td>{item.address}</td>
          <td>{item.telephone}</td>
        </tr>
      ));
    case "GetVicePresidentsOfTreatment":
      return data.map((item, index) => (
        <tr>
          <td className="px-3 py-5">{index + 1}</td>
          <td>{item.universityName}</td>
          <td>{item.vicePresident}</td>
          <td>{item.telephone}</td>
        </tr>
      ));
    case "GetUniversities":
      return data.map((item, index) => (
        <tr>
          <td className="px-3 py-5">{index + 1}</td>
          <td>{item.universityName}</td>
          <td>{item.website}</td>
        </tr>
      ));
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
