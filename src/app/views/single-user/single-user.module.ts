import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';


import { SingleUserRoutingModule } from './single-user-routing.module';

import { SingleUserComponent } from './single-user.component';

@NgModule({
    declarations: [
      SingleUserComponent
    ],
    imports: [
      CommonModule,
      SingleUserRoutingModule
    ]
  })
  export class SingleUserModule {}