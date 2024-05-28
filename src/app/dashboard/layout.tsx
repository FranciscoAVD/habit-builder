import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HabitBuilder Ai - Dashboard",
  description: "HabitBuilder Ai dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-rows-[1fr_80px] lg:grid-rows-1 lg:grid-cols-[80px_1fr] ">
      <Sidebar className="row-start-2 lg:row-start-1"/>

      {children}
    </div>
  );
}
