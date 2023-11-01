"use client";

import React from "react";
import MedicalEquipmentsForm from "../MedicalEquipmentsForm";
import { SingleCompany } from "@/services/common/types";
import AuthInput from "@/components/main/input/AuthInput";

const SignleCompany = ({
  singleCompany,
}: {
  singleCompany: SingleCompany | null;
}) => {
  console.log(singleCompany);
  return (
    <MedicalEquipmentsForm>
      <div className="col-span-2">
        <AuthInput
          name="name"
          label="نام کامل شرکت"
          placeholder="نام شرکت خود را وارد کنید"
        />
      </div>
      <div className="col-span-2">
        <AuthInput
          name="managerFullName"
          label="نام مدیر عامل"
          placeholder="نام مدیر عامل را وارد کنید"
        />
      </div>
      <div className="col-span-2">
        <AuthInput
          name="name"
          label="شماره تماس شرکت"
          placeholder="نام شرکت خود را وارد کنید"
        />
      </div>
      <div className="col-span-2">
        <AuthInput
          name="name"
          label="نام کامل شرکت"
          placeholder="نام شرکت خود را وارد کنید"
        />
      </div>
      <div className="col-span-2">
        <AuthInput
          name="name"
          label="نام کامل شرکت"
          placeholder="نام شرکت خود را وارد کنید"
        />
      </div>
    </MedicalEquipmentsForm>
  );
};

export default SignleCompany;
