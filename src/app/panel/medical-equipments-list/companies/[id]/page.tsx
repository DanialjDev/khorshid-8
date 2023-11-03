import MedicalEquipmentsDevices from "@/components/profile/admin/medical-equipments-list/forms/SingleDevice";
import SignleCompany from "@/components/profile/admin/medical-equipments-list/forms/SignleCompany";
import { getSingleDevice } from "@/services/profile/admin/medical-equipments-list";
import { cookies } from "next/headers";
import React from "react";
import { getSingleCompany } from "@/services/profile/admin/medical-equipments-list/company";
import { getCompanies } from "@/services/common";

const UpdateOrSetForm = async ({ params }: { params: { id: string } }) => {
  const singleCompany = await getSingleCompany(
    params.id!,
    cookies().get("token")?.value!
  );

  const companies = await getCompanies();
  return (
    <SignleCompany
      data={singleCompany?.payload ? singleCompany.payload : null}
      title=" تلفن و نام شرکت های تجهیزات پزشکی"
      desc={
        singleCompany?.payload
          ? "شما می توانید به صورت دستی اطلاعات را در اینجا  اصلاح یا حذف کنید."
          : "شما می توانید به صورت دستی اطلاعات را در اینجا وارد سایت کنید."
      }
      companies={companies?.companyList ? companies.companyList : null}
    />
  );
};

export default UpdateOrSetForm;
