import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SingleUserComponent } from './single-user.component';
import { AuthGuard } from '../../auth.guard';

const routes: Routes = [
    {path:'',
    component: SingleUserComponent,
        data: {
        title: 'Users / Single user',
      },canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class SingleUserRoutingModule {

}