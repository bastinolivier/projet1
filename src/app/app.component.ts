import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './Login/services';
import { User } from './_models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AkanSoft';

  public currentUser$: Observable<User>;

    constructor( private router: Router, private authenticationService: AuthenticationService ) { 
      this.currentUser$ = this.authenticationService.currentUser;
    }

    public logout() {
        this.authenticationService.logout();
        this.router.navigate(['/home']);
    }
}