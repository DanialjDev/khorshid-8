import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { authVariant } from "@/animations/auth/authVariants";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import Image from "next/image";
import { setShowImgModal } from "@/redux/features/image-modal/imageSlice";

const ImageModal = () => {
  const dispatch = useAppDispatch();
  const { showModal, imageUrl } = useAppSelector((state) => state.modal);
  return (
    <>
      <AnimatePresence mode="wait">
        {showModal && imageUrl && (
          <motion.div
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
            exit={{
              opacity: 0,
              transition: {
                duration: 0.4,
                ease: "easeInOut",
              },
            }}
            className="w-full h-screen bg-[#838383a9] fixed top-0 z-50 flex justify-center items-center"
          >
            <div className="w-[350px] h-[350px] flex flex-col justify-center items-center bg-white rounded-lg overflow-hidden p-3">
              <div
                className="flex justify-start w-full cursor-pointer mt-3"
                onClick={() => dispatch(setShowImgModal(false))}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="#2F384F"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="#2F384F"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                alt=""
                className="p-2"
                src={imageUrl}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageModal;
