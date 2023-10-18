import { db } from "@/lib/prisma";
import { CategoriesItem } from "./CategoriesItem";

const Categories = async () => {
  const categories = await db.category.findMany({});

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
      {categories.map((category) => (
        <CategoriesItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
