import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductsPage from './pages/products/page.tsx';
import TailwindCSSPage from './pages/tailwindcss/page.tsx';
import UseRefPage from './pages/react-hooks/use-ref/page.tsx';
import ChallengesPage from './pages/challenges/page.tsx';
import UseStatePage from './pages/react-hooks/use-state/page.tsx';

const router = createBrowserRouter(
  [
    {
      path: '/', 
      Component: App
    }, 
    {
      path: '/products', 
      Component: ProductsPage
    },
    {
      path: '/tailwindcss', 
      Component: TailwindCSSPage
    }, 
    {
      path: '/react-hooks/use-ref', 
      Component: UseRefPage
    },
    {
      path: '/react-hooks/use-state', 
      Component: UseStatePage
    }, 
    {
      path: '/challenges', 
      Component: ChallengesPage
    }
  ]
)

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
