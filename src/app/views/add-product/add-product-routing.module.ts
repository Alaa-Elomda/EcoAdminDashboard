import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './add-product.component';
import { AuthGuard } from '../../auth.guard';

const routes: Routes = [
    {path:'',
    component: AddProductComponent,
        data: {
        title: 'Add Product',
      },canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class AddProductRoutingModule {

}