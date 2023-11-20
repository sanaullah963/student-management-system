"use client";
import Container from "./Container";
import Image from "next/image";

import Link from "next/link";
import { headerArray } from "@/constant/data";
import { usePathname, useRouter } from "next/navigation";

function Header() {
  const pathname = usePathname();

  const handel = (e) => {
    e.preventDefault();
    console.log(pathname);
    console.log();
  };
  return (
    <div className=" bg-primary">
      <Container className={""}>
        <ul className="flex justify-center items-center text-white h-16">
          {headerArray.map((i) => (
            <Link key={i.url} href={i.url}>
              <li className="capitalize px-4">{i.titel}</li>
            </Link>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default Header;
