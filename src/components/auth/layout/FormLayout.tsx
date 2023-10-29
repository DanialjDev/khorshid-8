"use client";

import { useAppSelector } from "@/redux/hooks/hooks";
import React from "react";
import Login from "../login/Login";
import Signup from "../signup/Signup";
import ForgotPassword from "../login/ForgotPassword";
import ChangePassword from "../login/ChangePassword";
import UpdatePosterModal from "@/components/profile/admin/posters/UpdatePosterModal";
import UpdateDeviceNumberModal from "@/components/profile/admin/charge-accoun/UpdateDeviceNumberModal";
import Image from "next/image";

import Logo from "../../../../public/assets/images/navbar-logo.png";

const FormLayout = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { authAction, showForm } = useAppSelector((state) => state.auth);

  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center mt-3">
        <Image width={120} height={120} src={Logo} alt="" />
      </div>
      {authAction === "login" && showForm ? (
        <Login setIsOpen={setIsOpen} />
      ) : authAction === "signup" && showForm ? (
        <Signup setIsOpen={setIsOpen} />
      ) : authAction === "forgotPassword" && showForm ? (
        <ForgotPassword />
      ) : authAction === "changePassword" && showForm ? (
        <ChangePassword />
      ) : authAction === "updatePoster" && showForm ? (
        <UpdatePosterModal setIsOpen={setIsOpen} />
      ) : authAction === "updateDeviceNumber" && showForm ? (
        <UpdateDeviceNumberModal />
      ) : null}
    </div>
  );
};

export default FormLayout;
