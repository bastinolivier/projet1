import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/_models';
import { AlertService, AuthenticationService, UserService } from '../../Login/services';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public currentUser: User;
  public user: User[];
  public contactForm: FormGroup;
  public submitted = false;


  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.currentUser = this.authenticationService.currentUserValue;
    this.contactForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      objet: ['', Validators.required],
      message: ['', Validators.required],
    },
    );
  }

  onSubmit(): any {
    this.submitted = true;
    this.alertService.clear();
    if (this.contactForm.invalid) {
        return
    }
  }
}