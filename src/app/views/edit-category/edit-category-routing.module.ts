import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditCategoryComponent } from './edit-category.component';
import { AuthGuard } from '../../auth.guard';

const routes: Routes = [
    {path:'',
    component: EditCategoryComponent,
        data: {
        title: 'Order / Single Category / Edit Category',
      },canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class EditCategoryRoutingModule {

}