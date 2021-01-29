import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService, AuthenticationService } from '../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  formAuthentification: FormGroup;
    submitted = false;
    returnUrl: string;
    show = false; 



  constructor(
    private formBuilder:FormBuilder,
    private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService
  ) { 
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/userAuth']);
    }
  }
  
  public ngOnInit(): void {
    this.formAuthentification = this.formBuilder.group({
      username: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/userAuth';
  }
 
  public onSubmit() :void {
    this.submitted = true;

    this.alertService.clear();
    
    this.authenticationService.login(this.formAuthentification.controls.username.value, this.formAuthentification.controls.password.value)
        .pipe(first())
        .subscribe(
          (data: any) => {
                this.router.navigate([this.returnUrl]);
            },
          (error: string) => {
                this.alertService.error(error);
            });
          }
          

  public changetype(): void {
    this.show = !this.show;
  }

}