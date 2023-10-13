"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import Logo from "../../../../public/assets/images/navbar-logo.png";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { authToggler, setLinkRequired } from "@/redux/features/auth/authSlice";
import { authVariant } from "@/animations/auth/authVariants";
import FormLayout from "./FormLayout";
import { useRouter } from "next/navigation";

const AuthLayout = () => {
  const dispatch = useAppDispatch();
  const { authAction, showForm } = useAppSelector((state) => state.auth);

  return (
    <>
      {authAction !== "" && (
        <motion.div
          className="w-full h-screen bg-[#838383a9] fixed top-0 z-50 flex justify-center items-center"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          <AnimatePresence mode="wait">
            {showForm && (
              <motion.div
                variants={authVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-[450px] relative bg-white-gray rounded-xl"
              >
                <div className="w-full flex justify-center items-center mt-3">
                  <Image width={200} height={200} src={Logo} alt="" />
                </div>
                <div
                  onClick={() => {
                    dispatch(authToggler(""));
                    dispatch(setLinkRequired(false));
                  }}
                  className="absolute z-50 top-2 right-2 p-2 cursor-pointer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.75732 16.2426L16.2426 7.75733"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.2426 16.2427L7.75732 7.75739"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="w-full flex flex-col px-8 mt-10">
                  <FormLayout />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
};

export default AuthLayout;
