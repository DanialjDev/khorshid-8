"use client";

import { useAppSelector } from "@/redux/hooks/hooks";
import React from "react";
import Login from "../login/Login";
import Signup from "../signup/Signup";
import ForgotPassword from "../login/ForgotPassword";
import ChangePassword from "../login/ChangePassword";

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
      ) : null}
    </>
  );
};

export default FormLayout;
