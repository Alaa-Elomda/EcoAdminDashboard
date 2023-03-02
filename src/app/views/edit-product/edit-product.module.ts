import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProductRoutingModule } from './edit-product-routing.module';

import { EditProductComponent } from './edit-product.component';
import { FormModule } from '@coreui/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
      EditProductComponent
    ],
    imports: [
      CommonModule,
      EditProductRoutingModule,
      FormModule,
      ReactiveFormsModule,
      HttpClientModule
    ]
  })
  export class EditProductModule {}