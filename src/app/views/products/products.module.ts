import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
      ProductsComponent
    ],
    imports: [
      CommonModule,
      ProductsRoutingModule,
      FormsModule,
      Ng2SearchPipeModule,
      FontAwesomeModule
    ]
  })
  export class ProductsModule {}