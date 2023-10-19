import { db } from "@/lib/prisma";

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

  return <h1>{product?.name}</h1>;
};

export default ProductDetailsPage;
