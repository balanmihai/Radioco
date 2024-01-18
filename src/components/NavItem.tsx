import { Button } from "./ui/button";
import { PRODUCT_CATEGORIES } from "@/config";
import Link from "next/link";

type Category = (typeof PRODUCT_CATEGORIES)[number];

interface NavItemProps {
  category: Category;
  isOpen: boolean;
  handleOpen: () => void;
  isAnyOpen: boolean;
}

const NavItem = ({ category }: NavItemProps) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Link href={category.href} passHref>
          <Button className="gap-1.5" variant="ghost">
            {category.label}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NavItem;
