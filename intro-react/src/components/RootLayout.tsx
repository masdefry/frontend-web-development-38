import { Outlet } from 'react-router-dom';
import Navbar from './home/Navbar';
import { ToastContainer } from 'react-toastify';

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  );
}
