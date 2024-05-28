import { create } from "zustand";

type TActiveStore = {
    activeItem: number | null;
    setActiveItem: (value: number) => void;
}

export const useTimelineActiveStore = create<TActiveStore>((set,get) => ({
    activeItem: null,
    setActiveItem: (id) => set(()=>({activeItem: id}))
}))