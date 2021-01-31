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

public objets = [
  {label: 'Info paie'},
  {label: 'Demande de congés'},
  {label: 'Arrêt maladie'},
  {label: 'Demande de rendez-vous'},
  {label: 'Autres'}];

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      username: [this.authenticationService.currentUserValue.username, [Validators.required, Validators.email]],
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