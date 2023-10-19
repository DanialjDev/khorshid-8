import CustomeTable from "@/components/main/table/CustomeTable";
import TableBodyData from "@/components/pages/medical-equipments-list/TableBodyData";
import { setDeviceId } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { UserProfileDevice } from "@/services/profile/user/types";
import { generateHeaders } from "@/utills/generateTableHeaders";
import Link from "next/link";
import React, { useMemo, useState } from "react";

const RegisteredDevices = async ({
  userDevices,
}: {
  userDevices: UserProfileDevice[] | undefined;
}) => {
  const [selectedDevice, setSelectedDevice] = useState(0);

  const tableHeaders = generateHeaders("ProfileDevices");
  return (
    <div className="w-full flex">
      <CustomeTable headers={tableHeaders ? tableHeaders : []}>
        {userDevices &&
          userDevices.map((item, index) => (
            <tr
              key={item.deviceId}
              className={` ${
                selectedDevice === item.deviceId ? "!bg-primaryLight" : ""
              } cursor-pointer`}
              onClick={() => setSelectedDevice(item.deviceId)}
            >
              <td className="whitespace-nowrap p-4 text-[14px]">{index + 1}</td>
              <td className="whitespace-nowrap p-4 text-[14px]">{item.name}</td>
              <td className="whitespace-nowrap p-4 text-[14px]">
                {item.brand}
              </td>
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
          ))}
      </CustomeTable>
    </div>
  );
};

export default RegisteredDevices;
