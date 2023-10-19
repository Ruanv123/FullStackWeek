import { db } from "@/lib/prisma";
import ProductImages from "./components/product-image";

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
    <div>
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
    </div>
  );
};

export default ProductDetailsPage;
