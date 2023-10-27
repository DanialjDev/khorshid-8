import React from "react";
import SectionLayout from "../SectionLayout";
import Select from "@/components/main/input/CustomSelect";
import CustomInput from "@/components/main/input/CustomInput";

const MedicalSectionEquipmentList = () => {
  return (
    <SectionLayout tableHeaders={["نام دستگاه", "کشور سازنده"]}>
      <div className="w-full grid gap-8 xl:grid-cols-3 lg:grid-cols-2">
        <div className="xl:col-span-1 lg:col-span-1">
          <Select
            label="لطفا کاربری دستگاه خود را در گروه های زیر انتخاب کنید."
            options={["دستگاه یک", "دستگاه دو", "دستگاه سوم"]}
          />
        </div>
        <div className="xl:col-span-1 lg:col-span-1">
          <Select
            label="ردیف"
            options={["دستگاه یک", "دستگاه دو", "دستگاه سوم"]}
          />
        </div>
        <div className="xl:col-span-1 lg:col-span-2">
          <CustomInput
            placeholder="کلمه مورد نظر خود را تایپ کنید."
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z"
                  stroke="#060607"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.5 16.5L15 15"
                  stroke="#060607"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
        </div>
      </div>
    </SectionLayout>
  );
};

export default MedicalSectionEquipmentList;
