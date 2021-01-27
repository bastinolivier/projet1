import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserService } from '../Login/services';
import { User } from '../_models';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})

export class UserPageComponent implements OnInit {
public currentUser: User;
public user: User[];

  constructor(private authenticationService: AuthenticationService, private userService: UserService) { }

  public ngOnInit(): void {
    this.currentUser = this.authenticationService.currentUserValue;
  }

}