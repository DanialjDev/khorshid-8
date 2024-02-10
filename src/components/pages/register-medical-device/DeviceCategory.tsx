import { nonBreakingSpace } from "@/utills/formatHelper";
import React from "react";

const DeviceCategory = ({
  text,
  setDeviceIds,
  deviceIds,
  id,
}: // onClick,
{
  text: string;
  setDeviceIds: React.Dispatch<React.SetStateAction<string[]>>;
  deviceIds: string[];
  id: number;
  // onClick: () => void;
}) => {
  return (
    <div className="basis-1/4 shrink my-4 flex items-center">
      <input
        id={text}
        type="checkbox"
        name={text}
        className="checkbox-accent border-[1px] checkbox cursor-pointer bg-none"
        checked={deviceIds.some((deviceId) => deviceId === String(id))}
        onChange={(e) => {
          if (e.target.checked) {
            setDeviceIds([...deviceIds, String(id)]);
          } else {
            setDeviceIds((deviceIDs) => {
              return deviceIDs.filter((deviceId) => deviceId !== String(id));
            });
          }
        }}
      />
      <label htmlFor={text} className="mr-1 ml-5 cursor-pointer flex flex-wrap">
        {nonBreakingSpace(text)}
      </label>
    </div>
  );
};

export default DeviceCategory;
