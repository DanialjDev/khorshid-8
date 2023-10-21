"use client";

import { Conference } from "@/services/homePage/types";
import React from "react";
import PosterBox from "../posters/PosterBox";

const ConfrencesContainer = ({
  confrences,
}: {
  confrences: Conference[] | undefined;
}) => {
  console.log(confrences);
  return (
    <div className="w-full flex flex-col">
      <div className="w-full grid grid-cols-3 gap-8">
        {confrences?.map((item) => (
          <PosterBox
            posterData={item}
            title={<p>کارت همایش {String(item.conferenceId)}</p>}
          />
        ))}
      </div>
    </div>
  );
};

export default ConfrencesContainer;
