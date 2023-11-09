import SingleDeansOfUniForm from "@/components/profile/admin/medical-equipments-list/forms/SingleDeansOfUni";
import { getStates } from "@/services/common";
import { getSingleDeansOfUni } from "@/services/profile/admin/medical-equipments-list/deans-of-uni";
import { cookies } from "next/headers";
import React from "react";

const SingleDeansOfUniPage = async ({ params }: { params: { id: string } }) => {
  const singleDeanOfUni = await getSingleDeansOfUni(
    params.id,
    cookies().get("token")?.value!
  );

  const iranStates = await getStates();

  return (
    <SingleDeansOfUniForm
      data={singleDeanOfUni?.payload ? singleDeanOfUni.payload : null}
      title="نام و تلفن ریاست دانشگاه علوم پزشکی"
      desc={
        singleDeanOfUni?.payload
          ? "شما می توانید به صورت دستی اطلاعات را در اینجا اصلاح یا حذف کنید."
          : "شما می توانید به صورت دستی اطلاعات را در اینجا وارد سایت کنید."
      }
      states={iranStates?.data ? iranStates.data : null}
    />
  );
};

export default SingleDeansOfUniPage;
