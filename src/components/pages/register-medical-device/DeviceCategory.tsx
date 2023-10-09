import React from "react";

const DeviceCategory = ({
  text,
  // setDeviceIds,
  // deviceIds,
  // id,
  onClick,
}: {
  text: string;
  // setDeviceIds: React.Dispatch<React.SetStateAction<string[]>>;
  // deviceIds: string[];
  // id: number;
  onClick: () => void;
}) => {
  return (
    <div className="basis-1/4 shrink my-4 flex items-center">
      <input
        id={text}
        type="checkbox"
        name={text}
        className="checkbox-accent border-[1px] checkbox cursor-pointer bg-none"
      />
      <label onClick={onClick} htmlFor={text} className="mr-2 cursor-pointer">
        {text}
      </label>
    </div>
  );
};

export default DeviceCategory;
