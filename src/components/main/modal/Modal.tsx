"use client";

import React, { ReactNode } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";

import Logo from "../../../../public/assets/images/navbar-logo.png";
import { usePathname } from "next/navigation";

const Modal = ({
  isOpen,
  setIsOpen,
  children,
  setAuthAction,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  setAuthAction?: React.Dispatch<
    React.SetStateAction<
      | ""
      | "login"
      | "signup"
      | "forgotPassword"
      | "changePassword"
      | "updatePoster"
      | "updateDeviceNumber"
    >
  >;
}) => {
  const pathname = usePathname();
  return (
    <>
      {isOpen && (
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-[100000]"
            onClose={() => {
              setIsOpen(false);
              if (setAuthAction) {
                setAuthAction("login");
              }
            }}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      <div
                        onClick={() => {
                          setIsOpen(false);
                          if (setAuthAction) {
                            setAuthAction("login");
                          }
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
                      {!pathname.startsWith(
                        "/panel/register-product-requests/"
                      ) && (
                        <div className="w-full flex justify-center items-center mt-3">
                          <Image
                            width={120}
                            height={120}
                            src={Logo}
                            alt=""
                            unoptimized
                          />
                        </div>
                      )}
                    </Dialog.Title>
                    {children}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  );
};

export default Modal;
