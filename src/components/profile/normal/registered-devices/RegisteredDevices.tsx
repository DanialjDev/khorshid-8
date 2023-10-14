import CustomeTable from "@/components/main/table/CustomeTable";
import { generateHeaders } from "@/utills/generateTableHeaders";
import React from "react";

const RegisteredDevices = async ({
  tableItems,
}: {
  tableItems: React.JSX.Element[] | undefined;
}) => {
  const tableHeaders = generateHeaders("ProfileDevices");
  return (
    <div className="w-full flex">
      <CustomeTable
        items={tableItems}
        headers={tableHeaders ? tableHeaders : []}
      />
    </div>
  );
};

export default RegisteredDevices;
