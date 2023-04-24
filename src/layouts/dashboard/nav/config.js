// component
import Iconify from '../../../components/iconify/Iconify';
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
    info: 'new',
    color: 'blue',
  },
  {
    title: 'menu list',
    path: '/dashboard/menu',
    icon: <Iconify icon="ic:baseline-menu-book" />,
  },
  {
    title: 'menu view',
    path: '/dashboard/menus',
    icon: <Iconify icon="eva:grid-outline" />,
  },
  {
    title: 'Staff',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
