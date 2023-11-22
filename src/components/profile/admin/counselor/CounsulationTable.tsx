"use client";

import CustomeTable from "@/components/main/table/CustomeTable";
import { getConsulations } from "@/services/profile/admin/consulation";
import { CounsulationObj } from "@/services/profile/admin/consulation/types";
import { gregorianIsoToJalaali } from "@/utills/formatHelper";
import { generateHeaders } from "@/utills/generateTableHeaders";
import Link from "next/link";
import React, { useState } from "react";
import Cookies from "js-cookie";
import Pagination from "@/components/main/pagination/Pagination";

const CounsulationTable = ({ data }: { data: CounsulationObj }) => {
  const [items, setItems] = useState(data);
  const tableHeaders = generateHeaders("panel_consulation");

  const paginateHandler = async (pageNumber: number) => {
    const response = await getConsulations(Cookies.get("token")!, pageNumber);

    if (response?.consulationData) {
      setItems(response.consulationData);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center mt-3">
      <CustomeTable headers={tableHeaders ? tableHeaders : []}>
        {items &&
          items &&
          items.data.map((item, index) => (
            <tr key={index}>
              <td className="whitespace-nowrap p-4 text-[14px]">{index + 1}</td>
              <td className="whitespace-nowrap p-4 text-[14px]">
                {item.fullName}
              </td>
              <td className="whitespace-nowrap p-4 text-[14px]">
                {item.phoneNumber}
              </td>
              <td className="whitespace-nowrap p-4 text-[14px]">
                {`${item.comment.slice(0, 70)}...`}
              </td>
              <td className="whitespace-nowrap p-4 text-[14px]">
                {gregorianIsoToJalaali(item.creationDate)}
              </td>
              <td className="whitespace-nowrap p-4 text-[14px]">
                <a
                  href={`tel:${item.phoneNumber}`}
                  className="py-3 px-7 cursor-pointer text-primaryDark underline w-fit flex justify-center items-center rounded-full bg-primaryLight"
                >
                  تماس
                </a>
              </td>
            </tr>
          ))}
      </CustomeTable>
      <div className="w-full flex justify-center my-7">
        <Pagination
          totalPagesCount={items.totalPagesCount!}
          onClick={paginateHandler}
        />
      </div>
    </div>
  );
};

export default CounsulationTable;
