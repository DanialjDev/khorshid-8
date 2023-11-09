import { DeviceName } from "@/services/common/types";
import React, { useState } from "react";

const SelectBox = ({
  categories,
  onChange,
}: {
  categories: DeviceName[];
  onChange?: () => Promise<void>;
}) => {
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<
    { categoryName: string; id: number }[]
  >([]);

  const updateCategories = (item: { categoryName: string; id: number }) => {
    if (!selectedCategories.includes(item)) {
      setSelectedCategories((prevState) => [...prevState, item]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((state) => state.id !== item.id)
      );
    }
  };

  return (
    <>
      <div
        onClick={() => setShowCategories((prevState) => !prevState)}
        className="w-full cursor-pointer flex border text-dark focus:border-primary bg-white autofill:!bg-white border-inputBorder rounded-lg p-[12px] disabled:opacity-60 bg-transparent outline-none mt-1"
      >
        <p className="text-gray">نوع خدمات دستگاه</p>
        <div className="flex justify-center items-center absolute left-3 top-5">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6L9 12L15 6"
              stroke="#060607"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div
        className={`w-full overflow-scroll flex-col h-[300px] bg-white z-40 border border-inputBorderColor rounded-lg absolute ${
          showCategories ? "flex" : "hidden"
        }`}
      >
        {categories &&
          categories.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`w-full relative flex p-2 hover:bg-primaryLight cursor-pointer ${
                  selectedCategories.includes(item)
                    ? "bg-primaryLight"
                    : "bg-white"
                }`}
                onClick={() => updateCategories(item)}
              >
                {item.categoryName}
                {selectedCategories.includes(item) && (
                  <span className="absolute left-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        fill="#1DC9A0"
                        fill-opacity="0.15"
                        stroke="#1DC9A0"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                        stroke="#1DC9A0"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                )}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default SelectBox;
