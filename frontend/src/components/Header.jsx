"use client";

import { headerArray } from "@/constant/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Header() {
  const pathName=usePathname()
  return (
    <main className=" flex items-center my-8">
      <ul className="w-full flex flex-col gap-y-2 bg-gray-200 px-4 py-6 rounded-md">
        {headerArray.map((e, index) => (
          <Link href={e.url} key={index}>
            {/* <span>icon</span> */}
            <li className={` py-3 flex  items-center gap-2 ps-2 rounded-md text-white capitalize ${pathName==e.url ? ('ms-2 bg-gray-800 w-[95%]') : ('w-full hover:bg-gray-700 duration-300 bg-sky-500 hover:ms-2 hover:w-[95%]')} `}>
            {<e.icon />} {e.titel}
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}
