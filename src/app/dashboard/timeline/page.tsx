"use client";

import Habit from "@/components/timeline/habit";
import HabitSteps from "@/components/timeline/steps";
import { ScrollArea } from "@/components/ui/scroll-area";
import { habitFormationProcess } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useTimelineActiveStore } from "@/stores/timeline-active-store";
export default function Timeline() {
  const active = useTimelineActiveStore((state) => state.activeItem);
  return (
    <main className="min-h-screen overflow-y-scroll py-4 px-10 text-neutral-100 bg-[#020202]">
      <h1 className="text-5xl font-semibold mb-12">Timeline</h1>
      <section className="grid lg:grid-cols-3 h-[500px] gap-x-6 rounded-xl">
        <ul className="h-full">
          <Habit
            id={1}
            habit="Read 10 books"
            completed={false}
            currentStep={1}
            steps={5}
          />
          <Habit
            id={2}
            habit="Become an early bird"
            completed={true}
            currentStep={4}
            steps={4}
          />
          <Habit
            id={3}
            habit="Workout before work"
            completed={false}
            currentStep={3}
            steps={5}
          />
          <Habit
            id={4}
            habit="Become a saver"
            completed={false}
            currentStep={2}
            steps={5}
          />
        </ul>

        <ScrollArea className={cn("h-full",{
            "": active === null
        })}>
          {active
            ? habitFormationProcess.map((item, idx) => (
                <HabitSteps item={item} key={idx} />
              ))
            : <span className="block text-center">No habit selected</span>}
        </ScrollArea>
        <div className="max-w-lg rounded-2xl p-4 border border-neutral-600 h-full">
          Calendar Timeline
        </div>
      </section>
    </main>
  );
}
