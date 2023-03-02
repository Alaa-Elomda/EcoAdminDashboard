import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SingleOrderComponent } from './single-order.component';
import { AuthGuard } from '../../auth.guard';

const routes: Routes = [
    {path:'',
    component: SingleOrderComponent,
        data: {
        title: 'Orders / Single Order',
      },canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class SingleOrderRoutingModule {

}