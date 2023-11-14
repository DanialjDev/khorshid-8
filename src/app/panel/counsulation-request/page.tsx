import CounsulationTable from "@/components/profile/admin/counselor/CounsulationTable";
import { getConsulations } from "@/services/profile/admin/consulation";
import { cookies } from "next/headers";
import React from "react";

const ConsulationRequest = async () => {
  const cookie = cookies().get("token")?.value;
  const response = await getConsulations(cookie!);

  return (
    <div className="w-full flex flex-col">
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
      <CounsulationTable data={response?.consulationData!} />
    </div>
  );
};

export default ConsulationRequest;

export const generateMetadata = async () => {
  return {
    title: "درخواست های مشاوره",
  };
};
