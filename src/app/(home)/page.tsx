import Image from "next/image";
import Categories from "./components/Categories";
import { db } from "@/lib/prisma";
import ProductList from "./components/ProductList";

export default async function Home() {
  const deals = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div className="">
      <Image
        src="/banner-home-01.png"
        height={0}
        width={0}
        alt="até 55% de desconto esse mes"
        sizes="100vw"
        className="h-auto w-full"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <ProductList products={deals} />
      </div>
    </div>
  );
}
