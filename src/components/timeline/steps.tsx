import { TItem } from "@/lib/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";

export default function HabitSteps({ item }: { item: TItem }) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem
        value={item.stepName}
        className="border-neutral-600 hover:bg-neutral-900 py-2 px-4"
      >
        <AccordionTrigger className="">
          <div className="flex justify-between w-full pr-2">
            <span>
              {item.step}. {item.stepName}
            </span>
            <div>
              <span className="font-light text-neutral-400">
                Duration: {item.weekDuration} weeks
              </span>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="space-y-4">
          <div className="flex justify-between">
            <span className="italic font-medium text-neutral-200">
              {item.steps.title}
            </span>
            <span className="text-neutral-400">
              {item.completed ? "(Completed)" : "(Ongoing)"}
            </span>
          </div>
          <ul className="space-y-2">
            {item.steps.descriptions.map((d, idx) => (
              <li key={idx} className="font-light text-neutral-200">
                {idx + 1}. {d}
              </li>
            ))}
          </ul>
          {!item.completed && (
            <Button variant={"secondary"} className="rounded-full">
              Mark as completed
            </Button>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
