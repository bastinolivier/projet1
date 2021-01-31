import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService, AuthenticationService, UserService } from '../services';
import { MustMatch } from '../_helpers/must-match.validator';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public formSignIn: FormGroup;
  public valueFromPass: string;
  public submitted = false;
  
  constructor(
    private formBuilder:FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
    ){
        
    if (this.authenticationService.currentUserValue) {
    this.router.navigate(['/userAuth']);
      } 
    }

  ngOnInit(): void {
    this.formSignIn = this.formBuilder.group({
      title: ['', Validators.required],
      name: ['', Validators.required],
      firstname: ['', Validators.required],
      age: ['', Validators.required],
      username: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]],
      confirmpassWord:['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmpassWord')
  });
  }

  onSubmit(): any {
    this.submitted = true;
    this.alertService.clear();
    if (this.formSignIn.invalid) {
        return
    }
    
    this.userService.register(this.formSignIn.value)
    .pipe(first())
    .subscribe(
            data => {
              this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
              this.alertService.error(error);
            });
          }
}
