import CustomeTable from "@/components/main/table/CustomeTable";
import { CompaniesObjectType } from "@/services/profile/admin/medical-equipments-list/types";
import { useRouter } from "next/navigation";
import React from "react";

const GetCompanies = ({
  rows,
  setRows,
  data,
  headers,
  isDelete,
}: {
  rows: number[];
  setRows: React.Dispatch<React.SetStateAction<number[]>>;
  data: CompaniesObjectType | null;
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
            key={item.companyId}
            className="cursor-pointer"
            onClick={() => {
              if (isDelete) {
                if (rows.includes(item.companyId)) {
                  setRows((prevState) =>
                    prevState.filter((id) => id !== item.companyId)
                  );
                } else {
                  setRows([...rows, item.companyId]);
                }
                return;
              }
              push(
                `/panel/medical-equipments-list/companies/${item.companyId}`
              );
            }}
          >
            {isDelete ? (
              <td className="p-2 whitespace-nowrap text-[13px]">
                <input
                  id="registerDeviceCheckbox"
                  name="registerDeviceCheckbox"
                  type="checkbox"
                  checked={rows.includes(item.companyId)}
                  className="checkbox-accent checkbox cursor-pointer bg-none scale-75 z-40"
                />
              </td>
            ) : (
              <td className="p-4 whitespace-nowrap text-[13px]">{index + 1}</td>
            )}
            <td className="whitespace-nowrap p-4 text-[14px]">{item.name}</td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.managerFullName}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {`${item.address.slice(0, 200)}...`}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.faxNumber}
            </td>
          </tr>
        ))}
    </CustomeTable>
  );
};

export default GetCompanies;
