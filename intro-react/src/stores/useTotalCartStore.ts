import { create } from 'zustand';

const useTotalCartStore = create((set) => ({
    totalCart: 0, 
    addToCart: () => set((state: any) => ({totalCart: state?.totalCart + 1}))
}));

export default useTotalCartStore; 