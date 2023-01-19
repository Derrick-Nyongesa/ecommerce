import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { topics } from "../lib/constants";

function Discover() {
  const router = useRouter();
  const { category } = router.query;
  const activeTopicStyle =
    "xl:border-2 hover:bg-primary xl:border-[#D31027] px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-[#EA384D]";
  const topicStyle =
    "xl:border-2 hover:bg-primary xl:border-gray-300 px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-black";
  return (
    <div>
      <div className="flex gap-10 flex-wrap items-center justify-center">
        {topics?.map((item) => (
          <Link href={`/?category=${item.name}`} key={item.name}>
            <div
              className={category === item.name ? activeTopicStyle : topicStyle}
            >
              <span
                className={`font-medium text-md hidden xl:block capitalize`}
              >
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Discover;
