import { Dispatch, Fragment, SetStateAction, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

export default function CustomSelect({
  items,
  selected,
  setSelected,
  disabled,
  height,
  onChange,
  label,
}: {
  items: { name: string; value: string }[];
  // selected: string;
  selected: { name: string; value: string };
  setSelected: React.Dispatch<
    React.SetStateAction<{
      name: string;
      value: string;
    }>
  >;
  disabled?: boolean;
  height?: string;
  onChange?: any;
  label?: string;
}) {
  return (
    <div className={`w-full ${height ? height : "h-full"} cursor-pointer`}>
      <Listbox
        disabled={disabled}
        value={selected}
        onChange={(e) => {
          setSelected(e);
          if (onChange) {
            onChange(e.value);
          }
        }}
      >
        <div className="relative h-full flex items-start flex-col justify-start">
          <div className="text-inputLabelColor text-[14px] mr-[2px]">
            {label}
          </div>
          <Listbox.Button className="relative w-full flex hover:shadow-inputHover disabled:opacity-40 cursor-pointer hover:border-inputHoverBorder border border-inputBorder rounded-lg h-full focus:border-primary bg-white pr-3 text-left transition-all focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="h-full flex justify-center items-center text-[14px]">
              {selected.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center pr-2">
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
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              onChange={(e) => console.log("sfsfsdf")}
              className="absolute border border-inputBorder rounded-lg h-[200px] top-14 z-40 overflow-scroll mt-1 max-h-60 w-full bg-white py-1 text-base ring-1 ring-black/5 focus:outline-none sm:text-sm"
            >
              {items.map((title, index) => (
                <>
                  {title.value !== "" ? (
                    <Listbox.Option
                      key={Number(title.value)}
                      className={({ active }) =>
                        `relative select-none py-2 pl-10 cursor-pointer pr-4 ${
                          active
                            ? "bg-primaryLight text-primary"
                            : "text-gray-900"
                        }`
                      }
                      value={title}
                    >
                      {({ selected }) => {
                        return (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {title.name}
                            </span>
                          </>
                        );
                      }}
                    </Listbox.Option>
                  ) : null}
                </>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
