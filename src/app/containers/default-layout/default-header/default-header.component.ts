import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { faBars, faSeedling } from '@fortawesome/free-solid-svg-icons';

import {  Router , ActivatedRoute,NavigationExtras } from '@angular/router';
import { LoginComponent } from '../../../views/login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../../../../app/services/login.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  barsIcon = faBars;
  faSeedling = faSeedling;

  token:any;

  constructor(private classToggler: ClassToggleService ,public router: Router,public route:ActivatedRoute,
    public cookieService:CookieService,public auth: LoginService) {
    super();
  }

  Logout(){
    localStorage.setItem('isLoggedIn','false');  
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    this.router.navigate(['/login']).then(function(){
      location.reload();
    });
  }
}
