import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './category.component';
import { AuthGuard } from '../../auth.guard';

const routes: Routes = [
    {path:'',
    component: CategoryComponent,
        data: {
        title: 'category',
      },canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class CategoryRoutingModule {

}
