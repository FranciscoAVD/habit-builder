import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="flex flex-col text-neutral-100 px-4 md:px-10 bg-[#020202] min-h-screen">
      <header className="sticky top-0 py-8 lg:py-4">
        <Link
          href="/"
          className="block  mx-auto w-fit px-4 py-1 bg-neutral-900  rounded-full"
        >
          HabitBuilder Ai
        </Link>
      </header>
      <div className="grid place-content-center flex-1 gap-y-10">
        <div className="space-y-6">
          <h1 className="text-5xl font-semibold text-center text-pretty">
            Change is just a few clicks away
          </h1>
          <form action="" className="">
            <Input
              autoFocus
              placeholder="Your next goal..."
              className="text-lg lg:text-base border-neutral-600 rounded-full px-6 max-w-lg mx-auto"
            />
          </form>
        </div>
        <ul className="space-y-2">
          <Suggestion>I want to become an early bird.</Suggestion>
          <Suggestion>I want to read 10 books a year.</Suggestion>
          <Suggestion>I want to save more money.</Suggestion>
        </ul>
      </div>
    </main>
  );
}

function Suggestion({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <li
      className={cn(
        `bg-neutral-900 hover:bg-neutral-800 rounded-full text-center py-2 px-8 w-fit mx-auto cursor-pointer transition ${className}`
      )}
    >
      {children}
    </li>
  );
}
