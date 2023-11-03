import CustomeTable from "@/components/main/table/CustomeTable";
import { useRouter } from "next/navigation";
import React from "react";

const GetLabs = ({
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
              push(`/panel/medical-equipments-list/labs/${item.id}`);
            }}
            key={item.id}
          >
            {isDelete ? (
              <td className="p-2 whitespace-nowrap text-[13px]">
                <input
                  id="registerDeviceCheckbox"
                  name="registerDeviceCheckbox"
                  type="checkbox"
                  checked={rows.includes(item.id)}
                  className="checkbox-accent checkbox cursor-pointer bg-none scale-75 z-40"
                  onChange={() => {
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
                    push(`/panel/medical-equipments-list/labs/${item.id}`);
                  }}
                />
              </td>
            ) : (
              <td className="p-4 whitespace-nowrap text-[13px]">{index + 1}</td>
            )}
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.universityName}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.headOfLaboratory}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {`${item.address.slice(0, 150)}...`}
            </td>
            <td className="whitespace-nowrap p-4 text-[14px]">
              {item.telephone}
            </td>
          </tr>
        ))}
    </CustomeTable>
  );
};

export default GetLabs;
