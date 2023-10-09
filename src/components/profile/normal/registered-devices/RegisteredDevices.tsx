import CustomeTable from "@/components/main/table/CustomeTable";
import { generateHeaders } from "@/utills/generateTableHeaders";
import React from "react";

const RegisteredDevices = () => {
  const tableHeaders = generateHeaders("ProfileDevices");
  return (
    <div className="w-full flex">
      <CustomeTable headers={tableHeaders ? tableHeaders : []} />
    </div>
  );
};

export default RegisteredDevices;
