import { useEffect, useState } from 'react';
import Navbar from './components/home/Navbar';
import ProductsSection from './components/home/ProductsSection';
import Backendless from './lib/backendless';

function HomePage() {
  const [products, setProducts] = useState<any[]>([]);

  const onGetProducts = async () => {
    try {
      const response = await Backendless.Data.of('Products').find();
      
      setProducts(response);
    } catch (error) {
      console.log(error);
    }
  };

  // ComponentDidMount -> useEffect
  useEffect(() => {
    onGetProducts();
  }, []);

  return (
    <>
      {/* <Navbar totalCarts={totalCarts} /> */}
      <ProductsSection products={products} />
    </>
  );
}

export default HomePage;
