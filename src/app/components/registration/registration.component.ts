import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {RegistrationService} from '../../services/registration/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  username: string;
  email: string;
  password: string;

  successMessage: string;
  errorsMessages: string[] = [];

  constructor(private registrationService: RegistrationService) {
  }

  ngOnInit() {
  }

  onSignUp(form: NgForm) {
    const value = form.value;

    const username = value.username;
    const email = value.email;
    const password = value.password;
    const account = {username, email, password};

    this.registrationService.reigerAccount(account).subscribe(
      data => {
        this.successMessage = data.message;
      },
      error => {
        console.log(error);
        const errors: [] = error.error.errors;
        for (const errorMessage of errors) {
          this.errorsMessages.push(errorMessage.field + ' ' + errorMessage.defaultMessage);
        }
      }
    );
  }

}
