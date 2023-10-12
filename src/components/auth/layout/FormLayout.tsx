"use client";

import { useAppSelector } from "@/redux/hooks/hooks";
import React from "react";
import Login from "../login/Login";
import Signup from "../signup/Signup";
import ForgotPassword from "../login/ForgotPassword";
import ChangePassword from "../login/ChangePassword";
import UpdatePosterModal from "@/components/profile/admin/posters/UpdatePosterModal";

const FormLayout = () => {
  const { authAction, showForm } = useAppSelector((state) => state.auth);

  return (
    <>
      {authAction === "login" && showForm ? (
        <Login />
      ) : authAction === "signup" && showForm ? (
        <Signup />
      ) : authAction === "forgotPassword" && showForm ? (
        <ForgotPassword />
      ) : authAction === "changePassword" && showForm ? (
        <ChangePassword />
      ) : authAction === "updatePoster" && showForm ? (
        <UpdatePosterModal />
      ) : null}
    </>
  );
};

export default FormLayout;
