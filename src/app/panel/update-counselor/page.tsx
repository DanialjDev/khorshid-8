import Box from "@/components/main/Box/Box";
import AuthInput from "@/components/main/input/AuthInput";
import Textarea from "@/components/main/input/Textarea";
import UpdateCounselorForm from "@/components/profile/admin/counselor/UpdateCounselorForm";
import React from "react";

const UpdateCounselor = () => {
  return (
    <div className="w-full flex flex-col mt-2">
      <div className="w-full flex justify-start items-center">
        <h2 className="text-[16px] text-primary font-bold">
          تغییر شماره تماس مشاوره
        </h2>
      </div>
      <div className="w-full flex justify-start items-center mt-2">
        <p className="text-gray text-[14px]">
          شما می توانید در این بخش درخواست های کاربران برای دریافت مشاوره خرید
          را مشاهده کرده و با آن ها تماس بگیرید.
        </p>
      </div>
      <div className="w-full mt-3">
        <UpdateCounselorForm />
      </div>
    </div>
  );
};

export default UpdateCounselor;
