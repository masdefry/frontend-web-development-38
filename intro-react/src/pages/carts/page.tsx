export default function CartPage() {
  return (
    <main className='p-10'>
      <h1 className='text-2xl font-bold text-green-700'>Cart Item</h1>
      <section className='border border-gray-300 mt-3 rounded-md p-10'>
        <div className='flex gap-3 justify-between'>
          <div className='flex gap-3'>
            <div className='w-20 h-20 bg-gray-200 rounded-md'></div>
            <div>
              <h2 className='font-bold'>Product Name</h2>
              <h2 className='text-sm text-gray-500'>Rp.xxx</h2>
            </div>
          </div>
          <div>
            <h2 className='text-sm font-bold text-gray-600'>x10</h2>
            <h2 className='text-sm font-bold text-gray-600'>Rp.xxx</h2>
          </div>
        </div>
      </section>
    </main>
  );
}
