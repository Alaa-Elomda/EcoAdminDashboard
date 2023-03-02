import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditOrderComponent } from './edit-order.component';
import { AuthGuard } from '../../auth.guard';

const routes: Routes = [
    {path:'',
    component: EditOrderComponent,
        data: {
        title: 'Orders / Single Order / Edit Order',
      },canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class EditOrderRoutingModule {

}