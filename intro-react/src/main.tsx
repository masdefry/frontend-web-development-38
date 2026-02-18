import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductsPage from './pages/products/page.tsx';

const router = createBrowserRouter(
  [
    {
      path: '/', 
      Component: App
    }, 
    {
      path: '/products', 
      Component: ProductsPage
    }
  ]
)

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
