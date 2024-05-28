"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useTimelineActiveStore } from "@/stores/timeline-active-store";

export default function Habit({
  id,
  habit,
  steps,
  currentStep,
  completed,
}: {
  id: number;
  habit: string;
  steps: number;
  currentStep: number;
  completed: boolean;
}) {
  const active = useTimelineActiveStore((state) => state.activeItem);
  const set = useTimelineActiveStore((state) => state.setActiveItem);
  return (
    <li>
      <Button
        onClick={() => set(id)}
        className={cn(
          "w-full  hover:bg-neutral-900 py-8 gap-x-4 justify-start cursor-pointer",
          {
            "bg-transparent focus-visible:bg-neutral-900": active !== id,
            "bg-neutral-800 hover:bg-neutral-800": active === id,
          }
        )}
      >
        <div
          className={cn("w-6 h-6 rounded-full", {
            "border border-neutral-600": completed === false,
            "bg-neutral-200": completed === true,
          })}
        />
        <div className="text-left">
          <span className="font-semibold">{habit}</span>
          <p className="font-light text-neutral-400">{completed ? "Completed!" : "Ongoing"}</p>
        </div>
        <div className="ml-auto">
          <span>
            {currentStep} / {steps}
          </span>
        </div>
      </Button>
    </li>
  );
}
