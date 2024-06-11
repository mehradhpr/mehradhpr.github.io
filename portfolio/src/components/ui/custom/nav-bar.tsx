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
    <div className="my-3 w-full flex justify-center">
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-10">
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
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
                <GithubIcon />
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
                <Linkedin />
              </a>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
