import { useState } from 'react';

export default function UseStatePage() {
  let [number, setNumber] = useState<number>(0);

  const onHandleIncrement = () => {
    setNumber(number + 1);
  };

  const onHandleDecrement = () => {
    setNumber(number - 1);
  };

  return (
    <>
      <div className='px-10'>
        <h1>Counter Use State</h1>
        <button onClick={onHandleDecrement}>-</button>
        <h2>{number}</h2>
        <button onClick={onHandleIncrement}>+</button>
      </div>
    </>
  );
}
