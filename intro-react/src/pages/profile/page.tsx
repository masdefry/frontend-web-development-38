import ContentCard from '../../components/profile/ContentCard';
import { CiShoppingCart } from "react-icons/ci";

type Props = {
  products: string;
  price: number;
};

export default function ProfilePage(props: Props) {
  /*
        props = {
            products: 'Indomie', 
            price: 15000
        }
    */

  return (
    <>
      <h1>Profile User</h1>
      <ContentCard products={props?.products} price={props?.price} />
      <CiShoppingCart className='text-red-500 text-3xl' />
    </>
  );
}



// npm i react-icons