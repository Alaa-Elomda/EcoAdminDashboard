import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AddProductRoutingModule } from './add-product-routing.module';

import { AddProductComponent } from './add-product.component';

@NgModule({
    declarations: [
      AddProductComponent
    ],
    imports: [
      CommonModule,
      AddProductRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule
    ]
  })
  export class AddProductModule {}