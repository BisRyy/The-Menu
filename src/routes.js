import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import DashboardAppPage from './pages/DashboardAppPage';
import MenuPage from './pages/MenuPage';
import MenuView from './pages/MenuView';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import Test from './pages/Test';
import Menu from './pages/Menu';
import Hotels from './pages/Hotels';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'menu', element: <MenuPage /> },
        { path: 'menus', element: <MenuView /> },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    { path: 'home', element: <HomePage /> },
    { path: 'menu', element: <Menu /> },
    { path: 'menu/:id', element: <Menu /> },
    { path: 'hotels', element: <Hotels /> },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard" />, index: true },
        { path: 'test', element: <Test /> },
        { path: 'register', element: <RegisterPage /> },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
