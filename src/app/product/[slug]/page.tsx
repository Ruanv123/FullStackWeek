import { db } from "@/lib/prisma";
import ProductImages from "./components/product-image";
import ProductInfo from "./components/product-info";
import { computedProductTotalPrice } from "@/helpers/product";

interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
  const product = await db.product.findFirst({
    where: {
      slug: params.slug,
    },
  });

  if (!product) return null;

  return (
    <div className="flex flex-col gap-8">
      <ProductImages product={product} />
      <ProductInfo product={computedProductTotalPrice(product)} />
    </div>
  );
};

export default ProductDetailsPage;
