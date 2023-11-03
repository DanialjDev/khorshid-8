import MedicalEquipmentsDevices from "@/components/profile/admin/medical-equipments-list/forms/SingleDevice";
import { getSingleLab } from "@/services/profile/admin/medical-equipments-list/labs";
import { cookies } from "next/headers";
import React from "react";
import SigleLabForm from "@/components/profile/admin/medical-equipments-list/forms/SigleLabForm";

const SingleLab = async ({ params }: { params: { id: string } }) => {
  const singleLabData = await getSingleLab(
    params.id,
    cookies().get("token")?.value!
  );
  //   console.log(singleLabData);
  return (
    <SigleLabForm
      title="اداره امور آزمایشگاه ها"
      desc="شما می توانید به صورت دستی اطلاعات را در اینجا اصلاح  یا حذف  کنید."
      singleLab={singleLabData?.payload ? singleLabData.payload : null}
    />
  );
};

export default SingleLab;
