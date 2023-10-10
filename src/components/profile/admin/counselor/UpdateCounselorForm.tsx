"use client";

import Box from "@/components/main/Box/Box";
import AuthInput from "@/components/main/input/AuthInput";
import Textarea from "@/components/main/input/Textarea";
import React, { useState } from "react";

const UpdateCounselorForm = () => {
  const [img, setImg] = useState("");
  return (
    <Box>
      <div className="w-full grid grid-cols-4 gap-8 p-3">
        <div className="col-span-2">
          <AuthInput
            label="نام مشاوره دهنده"
            placeholder="بین 8 تا 40 کارکتر بدون @_#..."
          />
        </div>
        <div className="col-span-2">
          <AuthInput
            label="جایگاه مشاوره دهنده"
            placeholder="کارشناس خرید تجهیزات پزشکی"
          />
        </div>
        <div className="col-span-4">
          <Textarea
            label="متن درباره مشاوره دهنده"
            placeholder="برای معرفی بیشتر فرد مشاوره دهنده یک متن وارد کنید."
          />
        </div>
        <div className="col-span-2">
          <AuthInput
            label="شماره تماس مشاوره دهنده"
            placeholder="...  ... - ۰۲۱"
          />
        </div>
      </div>
    </Box>
  );
};

export default UpdateCounselorForm;
