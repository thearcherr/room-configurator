import { create } from "zustand";

const useColor = create((set) => ({
    selectedItem: null,
    color: null,
    setSelectedItem: ((selectedItem) => set({selectedItem: selectedItem})),
    setColor: ((color) => set({color: color}))
}));

export default useColor;