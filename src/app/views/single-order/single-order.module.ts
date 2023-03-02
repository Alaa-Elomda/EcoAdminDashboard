import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleOrderRoutingModule } from './single-order-routing.module';

import { SingleOrderComponent } from './single-order.component';

@NgModule({
    declarations: [
      SingleOrderComponent
    ],
    imports: [
      CommonModule,
      SingleOrderRoutingModule
    ]
  })
  export class SingleOrderModule {}