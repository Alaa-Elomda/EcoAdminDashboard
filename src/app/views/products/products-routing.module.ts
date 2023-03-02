import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products.component';
import { AuthGuard } from '../../auth.guard';

const routes: Routes = [
    {path:'',
    component: ProductsComponent,
        data: {
        title: 'Products',
      },canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class ProductsRoutingModule {

}