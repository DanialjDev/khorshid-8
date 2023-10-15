import CustomeTable from "@/components/main/table/CustomeTable";
import TableBodyData from "@/components/pages/medical-equipments-list/TableBodyData";
import { setDeviceId } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { UserProfileDevice } from "@/services/profile/user/types";
import { generateHeaders } from "@/utills/generateTableHeaders";
import React, { useMemo } from "react";

const RegisteredDevices = async ({
  userDevices,
}: {
  userDevices: UserProfileDevice[] | undefined;
}) => {
  const { selectedDeviceId } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const onClick = (id: number) => dispatch(setDeviceId(id));

  // useMemo(() => {
  //   dispatch(setDeviceId());
  // }, [selectedDeviceId]);
  const TableBody = TableBodyData({
    // @ts-ignore
    data: userDevices,
    operationName: "GetProfileDevices",
    onClick: (id: number) => dispatch(setDeviceId(id)),
    // @ts-ignore
    selectedDeviceId,
  });
  const tableHeaders = generateHeaders("ProfileDevices");
  return (
    <div className="w-full flex">
      <CustomeTable
        items={TableBody}
        headers={tableHeaders ? tableHeaders : []}
      />
    </div>
  );
};

export default RegisteredDevices;
