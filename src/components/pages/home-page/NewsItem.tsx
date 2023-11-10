import React from "react";

import NewsImg from "../../../../public/assets/images/home-page/news.png";
import Image from "next/image";
import Button from "../../main/button/Button";
import { News } from "@/services/homePage/types";
import { getDatesRange } from "@/utills/days";
import Link from "next/link";

const NewsItem = ({
  creationDate,
  imageUrl,
  description,
  link,
  title,
}: News) => {
  const now = new Date();
  const DaysRange = getDatesRange(now, new Date(creationDate));
  return (
    <div className="w-full flex items-center  flex-col xl:col-span-1 md:col-span-2 col-span-4 relative lg:mb-8 md:mb-16 mb-32">
      <div className="w-full">
        <Image
          width={300}
          height={250}
          alt=""
          src={imageUrl}
          className="m-auto"
        />
      </div>
      <div className="w-[90%] flex flex-col p-4 bg-white shadow-md absolute xl:top-[55%] md:top-[70%] top-[85%] rounded-lg">
        <p className="text-[14px]">{title}</p>
        <p className="text-[#898989] my-4 text-[12px]">{description}</p>
        <div className="w-full flex justify-between items-center rounded-br-[4px] rounded-bl-[4px] bg-[#F9F9F9] p-2">
          <div className="flex items-center mr-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="scale-90"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.78374 0.518256C8.757 0.319611 8.58803 0.166504 8.38358 0.166504C8.16054 0.166504 7.97974 0.348714 7.97974 0.573481V1.02356H4.43977V0.573481L4.43608 0.518256C4.40934 0.319611 4.24038 0.166504 4.03592 0.166504C3.81289 0.166504 3.63208 0.348714 3.63208 0.573481V1.03362C1.97683 1.14739 0.957764 2.21971 0.957764 3.95001V8.86067C0.957764 10.7175 2.10013 11.8333 3.93058 11.8333H8.48489C10.3175 11.8333 11.4577 10.7362 11.4577 8.90172V3.95001C11.463 2.21877 10.4468 1.14666 8.78743 1.03351V0.573481L8.78374 0.518256ZM7.97974 1.83789V2.35917L7.98342 2.4144C8.01016 2.61304 8.17913 2.76615 8.38358 2.76615C8.60662 2.76615 8.78743 2.58394 8.78743 2.35917V1.84976C9.99533 1.94953 10.6543 2.67625 10.6505 3.94914V4.18176H1.76587V3.95039C1.76587 2.67893 2.42781 1.95076 3.63208 1.84999V2.35917L3.63577 2.4144C3.66251 2.61304 3.83147 2.76615 4.03592 2.76615C4.25896 2.76615 4.43977 2.58394 4.43977 2.35917V1.83789H7.97974ZM1.76587 4.99571V8.86105C1.76587 10.2626 2.54106 11.0197 3.93099 11.0197H8.48531C9.88001 11.0197 10.6504 10.2784 10.6504 8.9021L10.6505 4.99571H1.76587ZM9.00823 6.71215C9.00823 6.48738 8.82743 6.30518 8.60439 6.30518L8.5446 6.30889C8.34749 6.33584 8.19556 6.50612 8.19556 6.71215C8.19556 6.93692 8.37636 7.11913 8.60439 7.11913L8.65919 7.11541C8.85631 7.08846 9.00823 6.91819 9.00823 6.71215ZM6.21475 6.30518C6.43779 6.30518 6.6186 6.48738 6.6186 6.71215C6.6186 6.91819 6.46667 7.08846 6.26955 7.11541L6.21475 7.11913C5.98672 7.11913 5.80591 6.93692 5.80591 6.71215C5.80591 6.50612 5.95784 6.33584 6.15496 6.30889L6.21475 6.30518ZM4.22454 6.71215C4.22454 6.48739 4.04374 6.30518 3.8207 6.30518L3.76091 6.30889C3.56379 6.33584 3.41187 6.50612 3.41187 6.71215C3.41187 6.93692 3.59267 7.11913 3.81571 7.11913L3.8755 7.11541C4.07261 7.08846 4.22454 6.91819 4.22454 6.71215ZM8.60439 8.41492C8.82743 8.41492 9.00823 8.59713 9.00823 8.82189C9.00823 9.02793 8.85631 9.1982 8.65919 9.22515L8.60439 9.22887C8.37636 9.22887 8.19556 9.04666 8.19556 8.82189C8.19556 8.61586 8.34749 8.44558 8.5446 8.41863L8.60439 8.41492ZM6.6186 8.82189C6.6186 8.59713 6.43779 8.41492 6.21475 8.41492L6.15496 8.41863C5.95784 8.44558 5.80591 8.61586 5.80591 8.82189C5.80591 9.04666 5.98672 9.22887 6.21475 9.22887L6.26955 9.22516C6.46667 9.19821 6.6186 9.02793 6.6186 8.82189ZM3.8207 8.41492C4.04374 8.41492 4.22454 8.59713 4.22454 8.82189C4.22454 9.02793 4.07261 9.1982 3.8755 9.22515L3.81571 9.22887C3.59267 9.22887 3.41187 9.04666 3.41187 8.82189C3.41187 8.61586 3.56379 8.44558 3.76091 8.41863L3.8207 8.41492Z"
                fill="#979797"
              />
            </svg>
            <p className="text-[#898989] mr-2 xl:text-[12px] text-[11px]">
              {DaysRange}
            </p>
          </div>
          <div className="">
            <Button
              href={`${link.startsWith("https://") ? link : `https://${link}`}`}
              fontSize="xl:text-[12px] text-[10px]"
              padding="p-0"
              icon={
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="scale-90"
                >
                  <path
                    d="M6.59191 7.1464L11.8127 7.1464"
                    stroke="#54E346"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.5918 4.22925L1.96188 7.1465L6.5918 10.0637L6.5918 4.22925Z"
                    stroke="#54E346"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              text="مطالعه بیشتر"
              dir="rtl"
              bg="bg-transparent"
              color="text-secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

// RewriteEngine On
// RewriteRule ^$ http://127.0.0.1:3000/ [P,L]
// RewriteCond %{REQUEST_URI} !-f
// RewriteCond %{REQUEST_URI} !-d
// RewriteRule ^(.*)$ http://127.0.0.1:3000/$1 [P,L]
