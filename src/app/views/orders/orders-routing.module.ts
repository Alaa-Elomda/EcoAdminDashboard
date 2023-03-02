import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrdersComponent } from './orders.component';
import { AuthGuard } from '../../auth.guard';


const routes: Routes = [
    {path:'',
    component: OrdersComponent,
        data: {
        title: 'Orders',
      },canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class OrdersRoutingModule {

}