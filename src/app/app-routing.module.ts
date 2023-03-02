import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/page404/page404.component';
import { LoginComponent } from './views/login/login.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./views/users/users.module').then((m) => m.UsersModule)
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./views/products/products.module').then((m) => m.ProductsModule)
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('./views/orders/orders.module').then((m) => m.OrdersModule)
      },
      {
        path: 'category',
        loadChildren: () =>
          import('./views/category/category.module').then((m) => m.CategoryModule)
      },
      {
        path: 'addProduct',
        loadChildren: () =>
          import('./views/add-product/add-product.module').then((m) => m.AddProductModule)
      },
      {
        path: 'users/:_id',
        loadChildren: () =>
          import('./views/single-user/single-user.module').then((m) => m.SingleUserModule)
      },
      {
        path: 'products/:_id',
        loadChildren: () =>
          import('./views/single-product/single-product.module').then((m) => m.SingleProductModule)
      },
      {
        path: 'editProduct/:_id',
        loadChildren: () =>
          import('./views/edit-product/edit-product.module').then((m) => m.EditProductModule)
      },
      {
        path: 'orders/:_id',
        loadChildren: () =>
          import('./views/single-order/single-order.module').then((m) => m.SingleOrderModule)
      },
      {
        path: 'editOrder/:_id',
        loadChildren: () =>
          import('./views/edit-order/edit-order.module').then((m) => m.EditOrderModule)
      },
      {
        path: '"category/:_id"',
        loadChildren: () =>
          import('./views/edit-category/edit-category.module').then((m) => m.EditCategoryModule)
      },
      {
        path: 'editCategory/:_id',
        loadChildren: () =>
          import('./views/edit-category/edit-category.module').then((m) => m.EditCategoryModule)
      },
    ]
  },

  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '**',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  }
  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
