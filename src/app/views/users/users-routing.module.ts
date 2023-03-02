import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users.component';
import { AuthGuard } from '../../auth.guard';

const routes: Routes = [
    {path:'',
    
    component: UsersComponent,
        data: {
        title: 'Users',
      },canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class UsersRoutingModule {

}