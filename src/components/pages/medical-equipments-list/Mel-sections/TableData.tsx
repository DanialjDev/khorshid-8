import CustomeTable from "@/components/main/table/CustomeTable";
import React from "react";

const TableDataContainer = ({ tableHeaders }: { tableHeaders: string[] }) => {
  return (
    <div className="w-full flex flex-col">
      <CustomeTable headers={tableHeaders}></CustomeTable>
    </div>
  );
};

export default TableDataContainer;
