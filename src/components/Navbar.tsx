import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import NavItems from "./NavItems";
import { cookies } from "next/headers";
import { getServerSideUser } from "@/lib/payload-utils";
import { buttonVariants } from "./ui/button";
import UserAccountNav from "./UserAccountNav";

const Navbar = async () => {
  const nextCookies = cookies();
  const { user } = await getServerSideUser(nextCookies);

  return (
    <div className="bg-white shadow-md sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="flex justify-between items-center h-16">
            {" "}
            {/* Ensures full width with space between items */}
            {/* Logo - Left Aligned */}
            <div className="flex items-center">
              <Link href="/">
                <img className="h-10" src="./../media/logo.svg" alt="" />
              </Link>
            </div>
            {/* Nav Items - Center Aligned */}
            <div className="flex-1 flex justify-center z-50 ">
              <NavItems />
            </div>
            {/* Right side container - We will ignore this for now */}
            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                {user ? null : (
                  <Link
                    href="/sign-in"
                    className={buttonVariants({
                      variant: "ghost",
                    })}
                  >
                    Sign in
                  </Link>
                )}

                {user ? null : (
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                )}

                {user ? (
                  <UserAccountNav user={user} />
                ) : (
                  <Link
                    href="/sign-up"
                    className={buttonVariants({
                      variant: "ghost",
                    })}
                  >
                    Create account
                  </Link>
                )}

                {user ? <span className="h-6 " aria-hidden="true" /> : null}

                {user ? null : (
                  <div className="flex lg:ml-6">
                    <span className="h-6 " aria-hidden="true" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
