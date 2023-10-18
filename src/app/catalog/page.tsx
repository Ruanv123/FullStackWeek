import { Badge } from "@/components/ui/badge";
import { ShapesIcon } from "lucide-react";
import { CategoriesItem } from "../(home)/components/CategoriesItem";
import { db } from "@/lib/prisma";
import CategoryItem from "./components/category-item";

const CatalogPage = async () => {
  const categories = await db.category.findMany({});

  return (
    <div className="flex flex-col gap-6 p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShapesIcon size={16} /> Cátalogo
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
