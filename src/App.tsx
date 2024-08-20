import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Users from './pages/users/Users.tsx';
import Products from './pages/products/Products.tsx';
import Home from './pages/home/Home.tsx';
import Navbar from './components/navbar/Navbar.tsx';
import Footer from './components/footer/Footer.tsx';
import Menu from './components/menu/Menu.tsx';
import Login from './pages/login/Login.tsx';
import './styles/global.scss';

const Layout = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menu-container">
          <Menu />
        </div>
        <div className="content-container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/products',
        element: <Products />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
