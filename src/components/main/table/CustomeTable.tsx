"use client";

import React, { ReactNode } from "react";

interface TableProps {
  headers: string[];
  items?: ReactNode;
}

const EmptyTable = () => {
  return (
    <div className="w-full">
      <p>sfsdjj</p>
      <svg
        width="221"
        height="183"
        viewBox="0 0 221 183"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.04"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M107.221 0.126681C151.169 1.70276 196.396 27.6852 211.048 68.9779C227.198 114.494 226.482 131.212 187.844 160.363C147.404 190.874 103.883 190.216 62.9506 160.363C22.569 130.911 -11.8415 108.868 3.8949 61.5489C19.4047 14.9117 57.9211 -1.64133 107.221 0.126681Z"
          fill="#4E4E4E"
        />
        <g clip-path="url(#clip0_145_2780)">
          <path
            d="M142.95 46.1674H85.7177C84.4134 46.1688 83.1631 46.6336 82.2409 47.4599C81.3187 48.2862 80.7999 49.4065 80.7983 50.5751V164.543L80.1424 164.722L66.1025 168.575C65.4371 168.756 64.7184 168.694 64.1042 168.402C63.4899 168.109 63.0303 167.61 62.8263 167.014L25.9494 48.1768C25.7462 47.5806 25.8155 46.9365 26.142 46.3861C26.4686 45.8356 27.0257 45.4239 27.6909 45.2413L46.4494 38.6768L107.949 20.1768L129.173 14.1194C129.503 14.0286 129.849 13.9969 130.192 14.026C130.535 14.0552 130.868 14.1447 131.172 14.2893C131.476 14.434 131.746 14.631 131.965 14.8691C132.184 15.1071 132.349 15.3816 132.45 15.6768L142.75 45.5797L142.95 46.1674Z"
            fill="white"
          />
          <path
            d="M133.872 51.0098H88.0641C87.0203 51.0111 86.0195 51.4265 85.2814 52.1649C84.5433 52.9032 84.128 53.9044 84.1268 54.9486V156.793L83.6018 156.953L72.3644 160.395C71.8319 160.558 71.2566 160.502 70.765 160.241C70.2734 159.979 69.9055 159.533 69.7422 159.001L36.3162 49.7783C36.1536 49.2455 36.209 48.6699 36.4704 48.178C36.7317 47.6862 37.1776 47.3182 37.7101 47.155L55.0268 41.8508L105.229 26.479L122.545 21.1748C122.809 21.0936 123.086 21.0653 123.36 21.0913C123.635 21.1174 123.901 21.1974 124.145 21.3266C124.388 21.4559 124.604 21.6319 124.78 21.8447C124.955 22.0574 125.087 22.3027 125.168 22.5665L133.712 50.4846L133.872 51.0098Z"
            fill="#F2F2F2"
          />
          <path
            opacity="0.4"
            d="M143.868 50.4842L133.571 16.8364C133.399 16.2758 133.119 15.7544 132.747 15.3021C132.374 14.8498 131.915 14.4754 131.398 14.2003C130.88 13.9253 130.314 13.7549 129.73 13.699C129.147 13.6431 128.558 13.7027 127.998 13.8745L103.652 21.3293L53.4527 36.7037L29.1065 44.1611C27.9755 44.5085 27.0285 45.2907 26.4734 46.3358C25.9182 47.381 25.8003 48.6038 26.1455 49.7358L61.3406 164.73C61.621 165.644 62.1868 166.444 62.955 167.012C63.7232 167.581 64.6533 167.888 65.6088 167.889C66.0511 167.889 66.4908 167.823 66.9133 167.692L83.6026 162.582L84.1276 162.419V161.871L83.6026 162.031L66.7585 167.191C65.7602 167.495 64.6819 167.391 63.7602 166.901C62.8385 166.411 62.1487 165.576 61.842 164.578L26.6496 49.5809C26.4976 49.0864 26.4447 48.5668 26.4937 48.0519C26.5428 47.5369 26.6929 47.0366 26.9355 46.5798C27.1781 46.1229 27.5084 45.7185 27.9075 45.3895C28.3066 45.0605 28.7667 44.8135 29.2613 44.6627L53.6076 37.2052L103.807 21.8334L128.153 14.376C128.528 14.2615 128.918 14.2031 129.311 14.2027C130.152 14.2046 130.972 14.4761 131.648 14.9774C132.324 15.4788 132.823 16.1836 133.07 16.9887L143.32 50.4842L143.483 51.0094H144.029L143.868 50.4842Z"
            fill="#4E4E4E"
          />
          <path
            d="M58.1522 47.2406C57.6463 47.2403 57.1538 47.0777 56.747 46.7769C56.3402 46.476 56.0404 46.0526 55.8918 45.5688L52.5108 34.5214C52.4199 34.2246 52.3884 33.9129 52.418 33.6039C52.4476 33.295 52.5378 32.9949 52.6833 32.7208C52.8289 32.4467 53.027 32.204 53.2663 32.0065C53.5056 31.809 53.7815 31.6607 54.0782 31.5698L100.261 17.426C100.86 17.2431 101.507 17.3055 102.06 17.5994C102.614 17.8933 103.028 18.3948 103.212 18.9938L106.593 30.0414C106.775 30.6407 106.713 31.288 106.419 31.8414C106.125 32.3947 105.624 32.8089 105.025 32.993L58.8424 47.1369C58.6188 47.2056 58.3861 47.2405 58.1522 47.2406Z"
            fill="#2C9CF0"
          />
          <path
            d="M75.8631 25.4812C78.7626 25.4812 81.113 23.1299 81.113 20.2294C81.113 17.329 78.7626 14.9777 75.8631 14.9777C72.9637 14.9777 70.6133 17.329 70.6133 20.2294C70.6133 23.1299 72.9637 25.4812 75.8631 25.4812Z"
            fill="#2C9CF0"
          />
          <path
            d="M75.8634 23.5553C77.6994 23.5553 79.1878 22.0664 79.1878 20.2298C79.1878 18.3931 77.6994 16.9042 75.8634 16.9042C74.0274 16.9042 72.5391 18.3931 72.5391 20.2298C72.5391 22.0664 74.0274 23.5553 75.8634 23.5553Z"
            fill="white"
          />
          <path
            d="M193.268 179.677H86.6309C85.9199 179.676 85.2383 179.402 84.7356 178.915C84.2328 178.428 83.95 177.767 83.9492 177.078V53.275C83.95 52.5862 84.2328 51.9257 84.7355 51.4386C85.2383 50.9515 85.9199 50.6775 86.6309 50.6767H193.268C193.979 50.6775 194.66 50.9515 195.163 51.4386C195.666 51.9257 195.948 52.5862 195.949 53.275V177.078C195.948 177.767 195.666 178.428 195.163 178.915C194.66 179.402 193.979 179.676 193.268 179.677Z"
            fill="white"
          />
          <path
            d="M184.137 166.548H95.4148C94.8232 166.547 94.2561 166.311 93.8378 165.893C93.4196 165.475 93.1843 164.907 93.1836 164.316V57.9682C93.1843 57.3765 93.4195 56.8092 93.8378 56.3907C94.2561 55.9723 94.8232 55.7369 95.4148 55.7363H184.137C184.729 55.7369 185.296 55.9723 185.714 56.3908C186.133 56.8092 186.368 57.3765 186.369 57.9682V164.316C186.368 164.907 186.133 165.475 185.714 165.893C185.296 166.311 184.729 166.547 184.137 166.548Z"
            fill="#E6E6E6"
          />
          <path
            opacity="0.4"
            d="M143.32 50.4843H88.0649C86.8819 50.486 85.7479 50.9568 84.9114 51.7936C84.0749 52.6304 83.6042 53.7649 83.6025 54.9483V162.031L84.1275 161.871V54.9483C84.1288 53.904 84.544 52.9029 85.2822 52.1645C86.0203 51.4261 87.021 51.0108 88.0649 51.0095H143.482L143.32 50.4843ZM191.487 50.4843H88.0649C86.8819 50.486 85.7479 50.9568 84.9114 51.7936C84.0749 52.6304 83.6042 53.7649 83.6025 54.9483V175.213C83.6042 176.396 84.0749 177.531 84.9114 178.367C85.7479 179.204 86.8819 179.675 88.0649 179.677H191.487C192.67 179.675 193.804 179.204 194.641 178.367C195.477 177.531 195.948 176.396 195.95 175.213V54.9483C195.948 53.7649 195.477 52.6304 194.641 51.7936C193.804 50.9568 192.67 50.486 191.487 50.4843ZM195.425 175.213C195.423 176.257 195.008 177.258 194.27 177.996C193.532 178.735 192.531 179.15 191.487 179.151H88.0649C87.021 179.15 86.0203 178.735 85.2822 177.996C84.544 177.258 84.1288 176.257 84.1275 175.213V54.9483C84.1288 53.904 84.544 52.9029 85.2822 52.1645C86.0203 51.4261 87.021 51.0108 88.0649 51.0095H191.487C192.531 51.0108 193.532 51.4261 194.27 52.1645C195.008 52.9029 195.423 53.904 195.425 54.9483V175.213Z"
            fill="#4E4E4E"
          />
          <path
            d="M163.925 62.0381H115.626C115 62.0374 114.399 61.7882 113.956 61.3451C113.513 60.9021 113.264 60.3014 113.264 59.6748V48.121C113.264 47.4945 113.514 46.8938 113.956 46.4507C114.399 46.0077 115 45.7585 115.626 45.7578H163.925C164.551 45.7585 165.152 46.0077 165.595 46.4507C166.037 46.8938 166.287 47.4945 166.287 48.121V59.6748C166.287 60.3014 166.037 60.9021 165.595 61.3451C165.152 61.7882 164.551 62.0374 163.925 62.0381Z"
            fill="#54E346"
          />
          <path
            d="M139.775 46.5454C142.675 46.5454 145.025 44.1941 145.025 41.2937C145.025 38.3932 142.675 36.0419 139.775 36.0419C136.876 36.0419 134.525 38.3932 134.525 41.2937C134.525 44.1941 136.876 46.5454 139.775 46.5454Z"
            fill="#54E346"
          />
          <path
            d="M139.776 44.4922C141.542 44.4922 142.973 43.0601 142.973 41.2935C142.973 39.5268 141.542 38.0947 139.776 38.0947C138.01 38.0947 136.578 39.5268 136.578 41.2935C136.578 43.0601 138.01 44.4922 139.776 44.4922Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_145_2780">
            <rect
              width="170"
              height="166"
              fill="white"
              transform="translate(25.9492 13.6767)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

const CustomeTable = ({ headers, items }: TableProps) => {
  return (
    <div className="w-full overflow-x-auto flex justify-center items-center mt-5">
      <div className="inline-block min-w-full">
        <div className="overflow-x-auto">
          <table className="w-full table-auto overflow-scroll min-w-full shadow-tableShadow rounded-3xl relative">
            <thead className="bg-tableHeadColor shadow-md w-full h-12">
              <tr className="rounded-xl text-[13px]">
                <td className="py-5 flex pr-2 rounded-tr-xl">ردیف</td>
                {headers.map((headerItem, key) => (
                  <td className={`p-4 whitespace-nowrap`} key={key}>
                    {headerItem}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody className="[&>*:nth-child(odd)]:bg-white [&>*:nth-child(even)]:bg-tableRowColor">
              {items}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomeTable;
