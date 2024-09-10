import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import NavItems from "./NavItems";
import Image from "next/image";
import Logo from "./../media/logo.svg";

const Navbar = async () => {
  return (
    <div className="bg-white shadow-md sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="flex justify-between items-center h-16">
            {/* Ensures full width with space between items */}
            {/* Logo - Left Aligned */}
            <div className="flex items-center">
              <Link href="/">
                <Image src={Logo} alt="" priority height={200} width={200} />
              </Link>
            </div>
            {/* Nav Items - Center Aligned */}
            <div className="flex-1 flex justify-end z-50 ">
              <NavItems />
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
