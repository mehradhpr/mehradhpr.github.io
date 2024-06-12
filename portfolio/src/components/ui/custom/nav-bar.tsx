"use client";

import React from "react";
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

import { GithubIcon, Linkedin } from "lucide-react";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

export const NavBar = () => {
  return (
    <div className="w-11/12 flex items-center py-2 bg-card shadow-2xl rounded-2xl mx-auto mt-3 mb-3 relative">
      <p className="absolute left-2 p-2 text-md font-bold text-card-foreground bg-primary rounded-xl shadow-xl">
        Mehrad Hassanpour
      </p>
      <div className="mx-auto">
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

            <NavigationMenuItem>
              <Link href="https://github.com/mehradhpr" legacyBehavior passHref>
                <a href="https://github.com/mehradhpr" target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="mx-2 transition-colors hover:bg-accent/50 p-2 size-10 rounded-md" />
                </a>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="https://www.linkedin.com/in/mehradhassanp/" legacyBehavior passHref>
                <a
                  href="https://www.linkedin.com/in/mehradhassanp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="transition-colors hover:bg-accent/50 p-2 size-10 rounded-md" />
                </a>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};
