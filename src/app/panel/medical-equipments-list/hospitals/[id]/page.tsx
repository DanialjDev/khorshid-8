import SingleHospital from "@/components/profile/admin/medical-equipments-list/forms/SingleHospital";
import { getStates } from "@/services/common";
import { getSingleHospital } from "@/services/profile/admin/medical-equipments-list/hospitals";
import { cookies } from "next/headers";
import React from "react";

const SingleHospitalPage = async ({ params }: { params: { id: string } }) => {
  const singleHospitalData = await getSingleHospital(
    params.id,
    cookies().get("token")?.value!
  );
  const iranStates = await getStates();

  return (
    <SingleHospital
      data={singleHospitalData?.payload ? singleHospitalData.payload : null}
      title="مشخصات بیمارستان های سراسر کشور"
      desc="شما می توانید مشخصات بیمارستان های سراسر کشور  ( کتاب ) را در اینجا به صورت دستی وارد کنید."
      states={iranStates?.data ? iranStates.data : null}
    />
  );
};

export default SingleHospitalPage;
