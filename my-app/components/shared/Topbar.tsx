import {
  UserButton,
  OrganizationSwitcher,
  SignOutButton,
  SignedIn,
} from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Link from "next/link";
import Image from "next/image";

const Topbar = () => {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          {/* Code within the SignedIn block will only appear when you are signed in */}
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>

        {/* OrgansationSwitcher is another thing from clerk */}
        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />

        <div className="ml-[17px]">
          <UserButton
            appearance={{
              baseTheme: dark,
            }}
            afterSignOutUrl="/"
          />
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
