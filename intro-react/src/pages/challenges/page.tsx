// import { useState } from 'react';

// import { useState } from 'react';

// export default function ChallengesPage() {
//   const [showPassword, setShowPassword] = useState<boolean>(false);

//   const onHandleShowPassword = () => {
//     if (showPassword === false) setShowPassword(true);
//     if (showPassword === true) setShowPassword(false);
//   };

//   return (
//     <>
//       <h1 className='text-2xl font-bold text-purple-500'>Form Login</h1>
//       <form>
//         <input
//           type='text'
//           placeholder='Type your email'
//           className='border border-purple-700 p-1 rounded-md'
//         />
//         <div className='flex items-center gap-3 mt-3'>
//           <input
//             type={showPassword === true ? 'text' : 'password'}
//             placeholder='Type your password'
//             className='border border-purple-700 p-1 rounded-md'
//           />
//           <p className='text-xs text-blue-500' onClick={onHandleShowPassword}>
//             {showPassword === true? 'Hidden Password':'Show Password'}
//           </p>
//         </div>
//         <button
//           type='submit'
//           className='bg-purple-700 text-white p-3 rounded-md mt-3'
//         >
//           Login
//         </button>
//       </form>
//     </>
//   );
// }

// import { useState } from "react";
// export default function ChallengesPage() {
//   const [text, setText] = useState<string>('');

//   const onHandleTyping = (event) => {
//     setText(event?.target?.value);
//   };

//   return (
//     <>
//       <div className='p-10'>
//         <h1 className='text-2xl font-bold text-blue-600'>Typing Area</h1>
//         <p className={text.length > 50 ? 'text-red-600' : 'text-blue-600'}>
//           {text}
//         </p>
//         <textarea
//           onChange={(event) => onHandleTyping(event)}
//           className='border border-blue-600 p-1 rounded-md mt-3'
//         />
//       </div>
//     </>
//   );
// }

import { useState } from 'react';

const imagesProduct = [
  'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/89/MTA-141123338/nike_sepatu_futsal_nike_tiempo_legend_10_academy_ic_original_dv4341_040_full01_e7bc2819.jpg',
  'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/89/MTA-141123338/nike_sepatu_futsal_nike_tiempo_legend_10_academy_ic_original_dv4341_040_full02_62e6c0cd.jpg',
  'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/89/MTA-141123338/nike_sepatu_futsal_nike_tiempo_legend_10_academy_ic_original_dv4341_040_full04_fad03b43.jpg',
];

export default function ChallengesPage() {
  const [imagePreview, setImagePreview] = useState<string>('');

  return (
    <>
      <div className='p-10'>
        <div className='border border-gray-300 rounded-md w-[250px] h-[250px] flex justify-center items-center'>
          {imagePreview === '' ? (
            <h2 className='text-xl font-bold'>Image Preview</h2>
          ) : (
            <img src={imagePreview} />
          )}
        </div>
        <div className='flex gap-3'>
          {imagesProduct?.map((item, index) => {
            return (
              <img
                src={item}
                className='w-24 h-24'
                onClick={() => setImagePreview(item)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
