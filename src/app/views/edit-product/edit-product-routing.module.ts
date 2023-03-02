import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditProductComponent } from './edit-product.component';
import { AuthGuard } from '../../auth.guard';

const routes: Routes = [
    {path:'',
    component: EditProductComponent,
        data: {
        title: 'Products / single product / Edit Product',
      },canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class EditProductRoutingModule {

}