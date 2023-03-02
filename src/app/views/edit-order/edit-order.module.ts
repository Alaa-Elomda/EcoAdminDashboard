import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditOrderRoutingModule } from './edit-order-routing.module';

import { EditOrderComponent } from './edit-order.component';
import { FormModule } from '@coreui/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
      EditOrderComponent
    ],
    imports: [
      CommonModule,
      EditOrderRoutingModule,
      FormModule,
      ReactiveFormsModule,
      HttpClientModule
    ]
  })
  export class EditOrderModule {}