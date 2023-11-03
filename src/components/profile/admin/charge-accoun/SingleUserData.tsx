"use client";

import Button from "@/components/main/button/Button";
import Modal from "@/components/main/modal/Modal";
import PageTitle from "@/components/main/pageTitle/PageTitle";
import CustomeTable from "@/components/main/table/CustomeTable";
import TableBodyData from "@/components/pages/medical-equipments-list/TableBodyData";
import { authToggler } from "@/redux/features/auth/authSlice";
import { setDeviceNumber } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks/hooks";
import {
  SingleUserDeviceObj,
  UserDevice,
  UserInfo,
} from "@/services/profile/admin/charge-account/types";
import { generateHeaders } from "@/utills/generateTableHeaders";
import Link from "next/link";
import React, { useState } from "react";
import UpdateDeviceNumberModal from "./UpdateDeviceNumberModal";
import Pagination from "@/components/main/pagination/Pagination";
import { userInfo } from "os";
import { useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import { getSingleUserDevices } from "@/services/profile/admin/charge-account";

const SingleUserData = ({
  userData,
  userDevices,
}: {
  userData: UserInfo | undefined;
  userDevices: SingleUserDeviceObj | undefined;
}) => {
  const searchParams = useSearchParams();
  const [items, setItems] = useState(userDevices);
  const dispatch = useAppDispatch();
  const tableHeaders = generateHeaders("GetUserAcceptedDevices");
  const [isOpen, setIsOpen] = useState(false);
  const paginateHandler = async (pageNumber: number) => {
    const newUserDevices = await getSingleUserDevices(
      searchParams.get("userId")!,
      Cookies.get("token")!,
      pageNumber
    );

    if (newUserDevices?.data) {
      setItems(newUserDevices.data);
    }
  };
  return (
    <div>
      <div className="w-full flex justify-between items-center">
        <PageTitle
          title={userData?.managerFullName ? userData.managerFullName : "کاربر"}
          text={` شما میتوانید در این بخش دستگاه های حساب کاربری ${userData?.managerFullName} را مشاهده و ظرفیت آن را تغییر دهید.`}
        />
        <div className="flex justify-center items-center border border-primary bg-primaryDark4 rounded-lg py-2 px-4">
          <p className="text-primary lg:text-[14px] text-[13px]">{`تعداد ظرفیت ${userData?.remainDeviceNumber} از ${userData?.maxDeviceNumber}`}</p>
        </div>
      </div>
      <div className="w-full flex flex-col mt-10">
        <div className="w-full flex justify-end">
          <Button
            onClick={() => {
              setIsOpen(true);
              dispatch(setDeviceNumber(userData?.remainDeviceNumber));
            }}
            text="افزودن ظرفیت"
            color="text-white"
            icon={
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1V13M1 7H13"
                  stroke="white"
                  stroke-opacity="0.95"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
        </div>
        <div className="w-full mt-3">
          <CustomeTable
            headers={tableHeaders ? tableHeaders : []}
            text="دستگاهی برای نمایش وجود ندارد"
          >
            {items &&
              items.data.map((item, index) => (
                <tr key={item.deviceId}>
                  <td className="whitespace-nowrap p-4 text-[14px]">
                    {index + 1}
                  </td>
                  <td className="whitespace-nowrap p-4 text-[14px]">
                    {item.name}
                  </td>
                  <td className="whitespace-nowrap p-4 text-[14px]">
                    {item.brand}
                  </td>
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
              ))}
          </CustomeTable>
        </div>
        <div className="w-full flex justify-center my-7">
          <Pagination
            totalPagesCount={items?.totalPagesCount!}
            onClick={paginateHandler}
          />
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <UpdateDeviceNumberModal />
      </Modal>
    </div>
  );
};

export default SingleUserData;
