export default function TailwindCSSPage() {
  return (
    <>
      {/* Font Size */}
      <h1 className='text-xl'>Intro Tailwind</h1>
      <h2 className='text-3xl'>Intro Tailwind</h2>
      <h3 className='text-6xl'>Intro Tailwind</h3>
      <h4 className='text-[3em]'>Intro Tailwind</h4>

      {/* Background Color */}
      <div className='w-[100px] h-[100px] bg-purple-100'>Box-01</div>
      <div className='w-[100px] h-[100px] bg-purple-200'>Box-01</div>
      <div className='w-[100px] h-[100px] bg-purple-400'>Box-01</div>
      <div className='w-[100px] h-[100px] bg-purple-800'>Box-01</div>
      <div className='w-[100px] h-[100px] bg-purple-950'>Box-01</div>
      <div className='w-[100px] h-[100px] bg-[#0B2D72]'>Box-01</div>
      <div className='w-[100px] h-[100px] bg-salmon'>Box-01</div>

      {/* Text Color */}
      <p className='text-red-100'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime nihil
        voluptatibus mollitia dolore natus temporibus rem saepe neque officiis
        possimus quis, omnis dolorem incidunt repellat maiores? Voluptatum
        facilis soluta sit.
      </p>
      <p className='text-red-500'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime nihil
        voluptatibus mollitia dolore natus temporibus rem saepe neque officiis
        possimus quis, omnis dolorem incidunt repellat maiores? Voluptatum
        facilis soluta sit.
      </p>
      <p className='text-red-900'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime nihil
        voluptatibus mollitia dolore natus temporibus rem saepe neque officiis
        possimus quis, omnis dolorem incidunt repellat maiores? Voluptatum
        facilis soluta sit.
      </p>

      {/* Grid */}
      <section className='grid grid-cols-5 grid-rows-4 bg-gray-100'>
        <div className='bg-red-100'>01</div>
        <div className='bg-red-200'>02</div>
        <div className='bg-red-300  col-span-3'>03</div>
        <div className='bg-red-400'>04</div>
        <div className='bg-red-500 col-end-6 row-span-2'>05</div>
      </section>

      {/* Flexbox */}
      <section className='flex justify-center items-center'>
        <div className='bg-red-100'>01</div>
        <div className='bg-red-200'>02</div>
      </section>

      {/* Responsive */}
      <h2 className='text-green-300 bg-black sm:text-yellow-300 md:text-gray-300 lg:text-blue-300 lg:bg-blue-900'>
        Purwadhika School
      </h2>

      <div className='mt-[100px]'></div>
    </>
  );
}
