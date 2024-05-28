import { TItem } from "./types";

export const habitFormationProcess: TItem[] = [
  {
    step: 1,
    stepName: "Initial Phase",
    weekDuration: 1,
    steps: {
      title: "Adjustment",
      descriptions: [
        "Start waking up 15 minutes earlier each day.",
        "Initial resistance and difficulty in adjusting sleep schedule are common.",
      ],
    },
    completed: true,
  },
  {
    step: 2,
    stepName: "Adaptation Phase",
    weekDuration: 3,
    steps: {
      title: "Consistency and Routine Establishment",
      descriptions: [
        "Continue to gradually adjust your wake-up time.",
        "Develop and stick to a consistent bedtime and morning routine.",
        "Monitor your progress and make necessary adjustments.",
      ],
    },
    completed: true,
  },
  {
    step: 3,
    stepName: "Building Momentum",
    weekDuration: 4,
    steps: {
      title: "Reinforcement and Reduced Resistance",
      descriptions: [
        "The new wake-up time starts to feel more natural.",
        "There's less mental and physical resistance to the early wake-up time.",
        "Morning routines become more automatic and less effortful.",
      ],
    },
    completed: true,
  },
  {
    step: 4,
    stepName: "Habit Formation",
    weekDuration: 4,
    steps: {
      title: "Automation and Sustainability",
      descriptions: [
        "Waking up early becomes a more ingrained part of your daily routine.",
        "The habit is easier to maintain with less conscious effort.",
        "Periodically review and tweak your routine to ensure it continues to serve your goals effectively.",
      ],
    },
    completed: true,
  },
];
