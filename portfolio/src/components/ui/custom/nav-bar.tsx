"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import useScreenSize from "@/hooks/useScreenSize";

import { GithubIcon, Linkedin, Menu } from "lucide-react";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

export const NavBar = () => {
  const screenSize = useScreenSize();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const mobileNavToggle = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const handleLinkClick = () => {
    setMobileNavOpen(false);
  };

  if (screenSize === "mobile") {
    return (
      <div className="fixed top-0 w-screen bg-white flex justify-between items-center p-1 z-20">
        <div className="flex items-center gap-1">
          <Menu onClick={mobileNavToggle} />

          <Link href="https://github.com/mehradhpr">
            <GithubIcon className="transition-colors hover:bg-accent/50 p-2 size-10 rounded-md" />
          </Link>

          <Link href="https://www.linkedin.com/in/mehradhassanp/">
            <Linkedin className="transition-colors hover:bg-accent/50 p-2 size-10 rounded-md" />
          </Link>
        </div>

        <div className="flex-grow flex justify-end">
          <div className="p-2 text-md font-bold text-card-foreground bg-primary rounded-xl shadow-xl min-h-fit min-w-fit">
            Mehrad Hassanpour
          </div>
        </div>

        {mobileNavOpen && (
          <div className="absolute top-12 right-0 w-full bg-white z-10">
            <div className="flex flex-col p-2">
              <Link
                href="/"
                className="p-2 hover:bg-accent/50 rounded-md"
                onClick={handleLinkClick}
              >
                About
              </Link>
              <Link
                href="/education"
                className="p-2 hover:bg-accent/50 rounded-md"
                onClick={handleLinkClick}
              >
                Education
              </Link>
              <Link
                href="/experience"
                className="p-2 hover:bg-accent/50 rounded-md"
                onClick={handleLinkClick}
              >
                Experience
              </Link>
              <Link
                href="/projects"
                className="p-2 hover:bg-accent/50 rounded-md"
                onClick={handleLinkClick}
              >
                Projects
              </Link>
              <Link
                href="/volunteering"
                className="p-2 hover:bg-accent/50 rounded-md"
                onClick={handleLinkClick}
              >
                Volunteering
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="desktop-menu flex justify-between items-center p-1 shadow-2xl">
        <NavigationMenu>
          <NavigationMenuList className="flex">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/education" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Education
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/experience" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Experience
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/projects" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Projects
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/volunteering" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Volunteering
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="p-2 text-md font-bold text-card-foreground bg-primary rounded-xl shadow-xl min-h-fit min-w-fit">
          Mehrad Hassanpour
        </div>
      </div>
    );
  }
};
