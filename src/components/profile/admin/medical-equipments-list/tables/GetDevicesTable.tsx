import CustomeTable from "@/components/main/table/CustomeTable";
import { TableDateType } from "@/services/profile/admin/medical-equipments-list/types";
import { generateHeaders } from "@/utills/generateTableHeaders";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const GetDevicesTable = ({
  rows,
  setRows,
  data,
  headers,
  isDelete,
}: {
  rows: number[];
  setRows: React.Dispatch<React.SetStateAction<number[]>>;
  data: TableDateType | null;
  isDelete: boolean;
  headers: { name: string; value: string }[];
}) => {
  const { push } = useRouter();
  return (
    <CustomeTable headers={headers!} text="اطلاعاتی برای نمایش وجود ندارد">
      {data &&
        data.data.length > 0 &&
        data.data.map((item, index) => (
          <tr
            className="cursor-pointer"
            onClick={() => {
              if (isDelete) {
                if (rows.includes(item.deviceId)) {
                  setRows((prevState) =>
                    prevState.filter((id) => id !== item.deviceId)
                  );
                } else {
                  setRows([...rows, item.deviceId]);
                }
                return;
              }
              push(`/panel/medical-equipments-list/devices/${item.deviceId}`);
            }}
            key={item.deviceId}
          >
            {isDelete ? (
              <td className="p-2 whitespace-nowrap text-[13px]">
                <input
                  id="registerDeviceCheckbox"
                  name="registerDeviceCheckbox"
                  type="checkbox"
                  checked={rows.includes(item.deviceId)}
                  className="checkbox-accent checkbox cursor-pointer bg-none scale-75 z-40"
                />
              </td>
            ) : (
              <td className="p-4 whitespace-nowrap text-[13px]">{index + 1}</td>
            )}
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
        ))}
    </CustomeTable>
  );
};

export default GetDevicesTable;
