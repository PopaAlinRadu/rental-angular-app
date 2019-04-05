import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {RegistrationService} from '../../services/registration/registration.service';
import {ToastContainerDirective, ToastrService} from 'ngx-toastr';

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

  constructor(private registrationService: RegistrationService,
              private toastr: ToastrService) {
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
        // @ts-ignore
        // this.successMessage = data.message;
        this.toastr.success(data.message);
      },
      error => {
        console.log(error);
        const errors: [] = error.error.errors;
        for (const errorMessage of errors) {
          // @ts-ignore
          this.toastr.error(errorMessage.field + ': ' + errorMessage.defaultMessage);
        }
      }
    );
  }

}
