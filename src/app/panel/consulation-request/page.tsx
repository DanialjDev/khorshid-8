import CustomeTable from "@/components/main/table/CustomeTable";
import TableBodyData from "@/components/pages/medical-equipments-list/TableBodyData";
import { getConsulations } from "@/services/profile/admin/consulation";
import { generateHeaders } from "@/utills/generateTableHeaders";
import React from "react";
import { toast } from "react-toastify";

const ConsulationRequest = async () => {
  const response = await getConsulations();
  const tableHeaders = generateHeaders("panel_consulation");
  const TableData = TableBodyData({
    // @ts-ignore
    data: response?.consulationData ? response.consulationData : null,
    operationName: "GetCounsulations",
  });

  if (response?.message) {
    toast.error(response.message, { autoClose: 2500 });
  }
  return (
    <div className="w-full flex flex-col mt-2">
      <div className="w-full flex justify-start items-center">
        <h2 className="text-[16px] text-primary font-bold">
          درخواست های مشاوره
        </h2>
      </div>
      <div className="w-full flex justify-start items-center mt-2">
        <p className="text-gray text-[14px]">
          شما می توانید در این بخش درخواست های کاربران برای دریافت مشاوره خرید
          را مشاهده کرده و با آن ها تماس بگیرید.
        </p>
      </div>
      {response?.consulationData && response.consulationData.length !== 0 ? (
        <div className="w-full flex justify-center items-center mt-3">
          <CustomeTable
            headers={tableHeaders ? tableHeaders : []}
            items={TableData}
          />
        </div>
      ) : null}
    </div>
  );
};

export default ConsulationRequest;