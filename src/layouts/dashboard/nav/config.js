// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Tela inicial',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Atletas',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Rumo ao estrelato',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Biblioteca',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
];

export default navConfig;
