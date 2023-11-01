import CustomeTable from "@/components/main/table/CustomeTable";
import {
  DeansOfUniversities,
  DeansOfUniversitiesData,
} from "@/services/medical-equipment/types";
import { CompaniesObjectType } from "@/services/profile/admin/medical-equipments-list/types";
import { useRouter } from "next/navigation";
import React from "react";

const Hospitals = ({
  rows,
  setRows,
  data,
  headers,
  isDelete,
}: {
  rows: number[];
  setRows: React.Dispatch<React.SetStateAction<number[]>>;
  data: any | null;
  isDelete: boolean;
  headers: { name: string; value: string }[];
}) => {
  const { push } = useRouter();
  return (
    <CustomeTable headers={headers!} text="اطلاعاتی برای نمایش وجود ندارد">
      {data &&
        data.data.length > 0 &&
        // @ts-ignore
        data.data.map((item, index) => (
          <tr
            key={item.id}
            className="cursor-pointer"
            onClick={() => {
              if (isDelete) {
                if (rows.includes(item.id)) {
                  setRows((prevState) =>
                    prevState.filter((id) => id !== item.id)
                  );
                } else {
                  setRows([...rows, item.id]);
                }
                return;
              }
              push(`/panel/medical-equipments-list/hospitals/${item.id}`);
            }}
          >
            {isDelete ? (
              <td className="p-2 whitespace-nowrap text-[13px]">
                <input
                  id="registerDeviceCheckbox"
                  name="registerDeviceCheckbox"
                  type="checkbox"
                  checked={rows.includes(item.id)}
                  className="checkbox-accent checkbox cursor-pointer bg-none scale-75 z-40"
                />
              </td>
            ) : (
              <td className="p-4 whitespace-nowrap text-[13px]">{index + 1}</td>
            )}
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
        ))}
    </CustomeTable>
  );
};

export default Hospitals;
