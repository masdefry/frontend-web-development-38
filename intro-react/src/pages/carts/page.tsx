import useTotalCartStore from '../../stores/useTotalCartStore';
export default function CartPage() {
  const { itemsCart } = useTotalCartStore();

  return (
    <main className='p-10'>
      <h1 className='text-2xl font-bold text-green-700'>Cart Item</h1>
      <section className='border border-gray-300 mt-3 rounded-md p-10'>
        {itemsCart?.map((item, index) => {
          return (
            <div className='flex gap-3 justify-between'>
              <div className='flex gap-3'>
                <div className='w-20 h-20 bg-gray-200 rounded-md'></div>
                <div>
                  <h2 className='font-bold'>{item?.name}</h2>
                  <h2 className='text-sm text-gray-500'>
                    Rp.{item?.price?.toLocaleString('id-ID')}
                  </h2>
                </div>
              </div>
              <div>
                <h2 className='text-sm font-bold text-gray-600'>
                  x{item?.quantity}
                </h2>
                <h2 className='text-sm font-bold text-gray-600'>
                  Rp.{(item?.price * item?.quantity).toLocaleString('id-ID')}
                </h2>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
