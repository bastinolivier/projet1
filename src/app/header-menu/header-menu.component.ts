import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../Login/services';
import { User } from '../_models';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  public currentUser$: Observable<User>;
  
  constructor(private router: Router, private authenticationService: AuthenticationService) { 
    this.currentUser$ = this.authenticationService.currentUser;
  }

  ngOnInit(): void {
  }

  public logout() {
    this.authenticationService.logout();
    this.router.navigate(['/home']);
}
}
