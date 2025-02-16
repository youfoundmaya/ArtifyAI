"use client";

import { 
  BookOpenText,
  ChartColumn,
  CreditCard,
  Frame,
  Image,
  Images,
  Layers,
  Settings2,
  SpellCheck,
  SquareStack,
  SquareTerminal,
 } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems =  [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: SquareTerminal,
  },{
    title: "My Notes",
    url: "/my_notes",
    icon: BookOpenText,
  },
  {
    title: "Summary",
    url: "/summary",
    icon: SpellCheck 
  },
  {
    title: "Quiz Generator",
    url: "/quiz-generator",
    icon: SquareStack
  },
  {
    title: "Learning Analytics",
    url: "/analytics",
    icon: ChartColumn
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings2
  }
]


export function NavMain() {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Focus. Grow. Achieve </SidebarGroupLabel>
      <SidebarSeparator/> 
      <SidebarMenu>
        {navItems.map((item) => (
          <Link key={item.title} href={item.url} className={cn("rounded-none",
          pathname === item.url ? 'text-primary bg-primary/5' : 'text-muted-foreground' ) }>
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton tooltip={item.title}>
              {item.icon && <item.icon />}
              <span>{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          </Link>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
