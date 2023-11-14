import SingleDevice from "@/components/profile/admin/medical-equipments-list/forms/SingleDevice";
import { getCompanies, getDeviceCategories } from "@/services/common";
import { getSingleDevice } from "@/services/profile/admin/medical-equipments-list";
import { cookies } from "next/headers";
import React from "react";

const UpdateOrSetForm = async ({ params }: { params: { id: string } }) => {
  const getSingleDeviceRes = await getSingleDevice(
    params.id!,
    cookies().get("token")?.value!,
    "GetSingleDevice"
  );
  const companies = await getCompanies();
  const devicCategories = await getDeviceCategories();
  return (
    <SingleDevice
      singleDeviceData={
        getSingleDeviceRes?.payload ? getSingleDeviceRes.payload : null
      }
      desc={
        getSingleDeviceRes?.payload
          ? "شما می توانید به صورت دستی یک دستگاه را در اینجا اصلاح یا حذف  کنید."
          : "شما می توانید به صورت دستی یک دستگاه را در اینجا وارد سایت کنید."
      }
      companies={companies?.companyList!}
      deviceCategories={devicCategories?.data ? devicCategories.data : null}
    />
  );
};

export default UpdateOrSetForm;

export const generateMetadata = async () => {
  return {
    title: "لیست گروه ها و شرکت های تجهیزات پزشکی",
  };
};
