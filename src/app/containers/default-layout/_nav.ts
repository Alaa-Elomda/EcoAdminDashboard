import { INavData } from '@coreui/angular';


export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    name: 'Users',
    url: '/users',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Products',
    url: '/products',
    iconComponent: { name: 'cil-drop' }
    
  },
  {
    name: 'Orders',
    url: '/orders',
    iconComponent: { name: 'cil-drop' }
    
  },
  {
    name: 'Categories',
    url: '/category',
    iconComponent: { name: 'cil-drop' }
    
  },
  {
    name: 'Add Product',
    url: '/addProduct',
    iconComponent: { name: 'cil-drop' }
    
  },
  
  {
    title: true,
    name: 'Extras'
  },
];


