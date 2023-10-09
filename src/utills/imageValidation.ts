import React from "react";

export const imageValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files) {
    console.log(e.target.files[0].size);
  }
};
