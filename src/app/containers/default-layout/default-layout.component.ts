import { Component } from '@angular/core';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';

import { navItems } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {

  faSeedling = faSeedling;
  
  public navItems = navItems;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor() {}
}
