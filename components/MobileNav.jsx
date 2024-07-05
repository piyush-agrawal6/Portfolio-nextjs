"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-20 mb-20 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              CodeBuff<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav>Nav</nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
