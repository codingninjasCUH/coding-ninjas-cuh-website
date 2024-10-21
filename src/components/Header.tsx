"use client";

import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Spacer } from "@nextui-org/spacer";
import { Link } from "@nextui-org/link";

import { Button } from "@nextui-org/button";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface INavigationMenu {
  children: React.ReactNode;
  href: string;
}

const NAVIGATION_MENU: INavigationMenu[] = [
  {
    children: "Home",
    href: "/",
  },
  {
    children: "Events",
    href: "/events",
  },
  {
    children: "About Us",
    href: "/about-us",
  },
  {
    children: "FAQs",
    href: "#faqs",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="lg:hidden"
      />
      <NavbarBrand className="cursor-pointer hover:opacity-85">
        <a className={"flex items-center"} href={"/"}>
          <Image
            alt={"logo"}
            src={"/images/logo.webp"}
            width="90"
            height="90"
          />
          <Spacer x={2} />
          <div className={"leading-none text-sm md:text-xl font-bold"}>
            <span className={"text-primary-600"}>Coding Ninjas</span>{" "}
            <p>Student Chapter</p>
          </div>
        </a>
      </NavbarBrand>

      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        {NAVIGATION_MENU.map((menu, idx) => {
          const isActive = pathname.endsWith(menu.href);
          return (
            <NavbarItem key={idx} isActive={isActive}>
              <Link
                color={isActive ? "primary" : "foreground"}
                href={menu.href}
              >
                {menu.children}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button as={Link} color={"primary"} variant={"solid"}>
            Get Involved
          </Button>
        </NavbarItem>

        <NavbarItem>
          <ThemeToggle />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {NAVIGATION_MENU.map((menu, idx) => {
          const isActive = pathname.endsWith(menu.href);
          return (
            <NavbarMenuItem key={idx} isActive={isActive}>
              <Link
                color={isActive ? "primary" : "foreground"}
                href={menu.href}
                onPress={() => setIsMenuOpen(false)}
                onClick={() => setIsMenuOpen(false)}
              >
                {menu.children}
              </Link>
            </NavbarMenuItem>
          );
        })}

        <NavbarMenuItem className={"mt-4"}>
          <Button
            as={Link}
            href={"/get-involved"}
            color={"primary"}
            variant={"solid"}
            onClick={() => setIsMenuOpen(false)}
            onPress={() => setIsMenuOpen(false)}
          >
            Get Involved
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
