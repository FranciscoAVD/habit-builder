export type TItem = {
    step: number;
    stepName: string;
    weekDuration: number;
    steps: {
        title: string;
        descriptions: string[];
    };
    completed: boolean;
}