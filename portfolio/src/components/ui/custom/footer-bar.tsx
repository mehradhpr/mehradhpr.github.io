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

export const Footer = () => {
  return (
    <div className="text-white font-bold w-11/12 flex justify-center py-2 shadow-2xl bg-gradient-to-br from-yellow-300 via-amber-600 via-65% to-amber-700 rounded-2xl mx-auto my-4">
      Developed by Mehrad Hassanpour
    </div>
  );
};
