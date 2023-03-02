import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCategoryRoutingModule } from './edit-category-routing.module';

import { EditCategoryComponent } from './edit-category.component';
import { FormModule } from '@coreui/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
      EditCategoryComponent
    ],
    imports: [
      CommonModule,
      EditCategoryRoutingModule,
      FormModule,
      ReactiveFormsModule,
      HttpClientModule
    ]
  })
  export class EditCategoryModule {}