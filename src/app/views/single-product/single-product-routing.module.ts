import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SingleProductComponent } from './single-product.component';
import { AuthGuard } from '../../auth.guard';

const routes: Routes = [
    {path:'',
    component: SingleProductComponent,
        data: {
        title: 'Products / Single Product',
      },canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class SingleProductRoutingModule {

}