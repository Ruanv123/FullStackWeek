"use client";

import Image from "next/image";
import Categories from "./components/Categories";

export default function Home() {
  return (
    <div className="py-5">
      <Image
        src="/banner-home-01.png"
        height={0}
        width={0}
        alt="até 55% de desconto esse mes"
        sizes="100vw"
        className="h-auto w-full"
      />

      <div className="mt-8">
        <Categories />
      </div>
    </div>
  );
}
