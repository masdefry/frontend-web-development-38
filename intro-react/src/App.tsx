// function HomePage(){
//   return(
//     <>
//       <h1>Home Page</h1>
//       <h2>Home Page</h2>
//     </>
//   )
// };

// export default HomePage;
import Button from './components/Button';

const HomePage = () => {
  return (
    <>
      <h1 style={{ backgroundColor: 'black', fontSize: '2em' }}>Home Page</h1>
      <h2>Home Page</h2>
      <Button text='Hubungi Kami' width={'100px'} height={'200px'} />
      <Button text='Kontak WA Kami' width={'50px'} height={'30px'} />
    </>
  );
};

export default HomePage;
