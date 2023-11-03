import SingleEvents from "@/components/profile/admin/medical-equipments-list/forms/SingleEvents";
import { getSingleEvent } from "@/services/profile/admin/medical-equipments-list/events";
import { cookies } from "next/headers";
import React from "react";

const EventsPage = async ({ params }: { params: { id: string } }) => {
  const singleEvent = await getSingleEvent(
    params.id,
    cookies().get("token")?.value!
  );
  return (
    <SingleEvents
      data={singleEvent?.payload ? singleEvent.payload : null}
      title="مناسبت های پزشکی"
      desc={
        singleEvent?.payload
          ? "شما می توانید مناسبت های پزشکی( کتاب ) را در اینجا به صورت دستی اصلاح یا حذف کنید."
          : "شما می توانید مناسبت های پزشکی( کتاب ) را در اینجا به صورت دستی وارد کنید."
      }
    />
  );
};

export default EventsPage;
