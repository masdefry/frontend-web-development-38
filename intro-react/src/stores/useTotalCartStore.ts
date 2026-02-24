import { create } from 'zustand';

type UseTotalCart = {
  totalCart: number;
  itemsCart: any[];
  addToCart: (newItem: any) => void;
};

const useTotalCartStore = create<UseTotalCart>((set) => ({
  totalCart: 0,
  itemsCart: [],
  /*
    [
        { id, name, image, quantiy, price }
    ]
  */
  addToCart: (newItem) =>
    set((state: any) => {
      
      // Destructure state.itemsCart untuk menhindari error ts   
      const currentItemsCart = [...state?.itemsCart];

      // Find product exist -> Mengembalikan index dari product yg dicari
      const findItem = currentItemsCart?.findIndex(
        (item: any) => item?.id === newItem?.id,
      );

      // Action ketika currentItemsCart nya masih kosong   
      if (currentItemsCart?.length === 0) {
        return {
          totalCart: state?.totalCart + 1,
          itemsCart: [{ ...newItem, quantity: 1 }],
        };
      }

      // Action ketika currentItemsCart nya sudah ada datanya 
      // Tetapi product yg di add belum tersedia di currentItemsCart  
      if (findItem === -1) {
        return {
          totalCart: state?.totalCart + 1,
          itemsCart: [...currentItemsCart, { ...newItem, quantity: 1 }],
        };
      }else{
        // Action ketika currentItemsCart nya sudah ada datanya 
        // Dan product yang di add sudah tersedia di currentItemsCart
        currentItemsCart[findItem].quantity += 1; 
        return {
            itemsCart: [...currentItemsCart]
        }
      }
    }),
}));

export default useTotalCartStore;
