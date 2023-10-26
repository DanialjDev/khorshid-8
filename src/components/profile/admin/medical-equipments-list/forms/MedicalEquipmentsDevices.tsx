"use client";

import React from "react";
import MedicalEquipmentsForm from "../MedicalEquipmentsForm";
import AuthInput from "@/components/main/input/AuthInput";
import { SingleDeviceData } from "@/services/profile/admin/medical-equipments-list/types";
import { useFormik } from "formik";

const MedicalEquipmentsDevices = ({
  singleDeviceData,
}: {
  singleDeviceData: SingleDeviceData | null;
}) => {
  return (
    <MedicalEquipmentsForm>
      <div className="col-span-2">
        <AuthInput name="companyName" />
      </div>
    </MedicalEquipmentsForm>
  );
};

export default MedicalEquipmentsDevices;
