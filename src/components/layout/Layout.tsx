import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import React, { ReactNode, useEffect } from "react";
import Footer from "../footer/Footer";
import Cookies from "js-cookie";
import { setIsLoggedIn } from "@/redux/features/auth/authSlice";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const { authAction } = useAppSelector((state) => state.auth);
  const { showModal } = useAppSelector((state) => state.modal);
  const user = Cookies.get("user");

  useEffect(() => {
    if (user) {
      dispatch(setIsLoggedIn(true));
    }
  }, []);
  return (
    <div
      className={`w-full bg-white-gray ${
        authAction !== "" || showModal ? "fixed" : ""
      } xl:pt-0 pt-10`}
    >
      <div className="w-full bg-white-gray pt-32 px-5 2xl:px-32 xl:px-20">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
