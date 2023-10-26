import CustomeTable from "@/components/main/table/CustomeTable";
import React, { ReactNode } from "react";

const TableDataContainer = ({
  tableHeaders,
  children,
}: {
  tableHeaders: string[];
  children: ReactNode;
}) => {
  return (
    <div className="w-full flex flex-col">
      <CustomeTable headers={tableHeaders}></CustomeTable>
    </div>
  );
};

export default TableDataContainer;
