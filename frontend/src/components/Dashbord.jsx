import React from "react";
import Container from "./Container";
import Link from "next/link";
import { dashbordArray } from "@/constant/data";
import PageHeadding from "./PageHeadding";
export default function Dashbord() {
  return (
    <main>
      <Container className={"mt-24"}>
        <PageHeadding headding={'our dashbord'}/>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10">
          {/* item-1 */}
          {dashbordArray.map((e, index) => (
            <div className="border-2 border-gray-400">
              <Link href={e.url} key={index}>
                <div className={` text-center text-gray-700 font-semibold capitalize text-xl py-5 flex flex-col  items-center bg-gray-200 hover hover:shadow-xl duration-300`}>
                  <span className={` text-3xl`}>
                    {<e.icon />}
                  </span>
                  <p className={` mt-5`}>{e.titel}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
