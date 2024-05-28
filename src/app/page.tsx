import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-y-10 px-4 bg-[#020202] text-neutral-100">
      <div className="space-y-8 lg:space-y-2">
        <h1 className="w-fit px-4 py-1 mx-auto rounded-full bg-neutral-900">
          HabitBuilder Ai
        </h1>
        <h2 className="text-5xl font-semibold uppercase text-center">
          One habit can change <br />
          your life.
        </h2>
        <span className="block mx-auto w-fit text-xl text-neutral-500 text-center">
          Every big goal is a collection of smaller milestones.
        </span>
      </div>

      <Button className="rounded-full hover:bg-neutral-800" asChild>
        <Link href="/dashboard">Get Started</Link>
      </Button>
    </main>
  );
}
