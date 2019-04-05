import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/authentication/auth.service';
import {Router} from '@angular/router';
import {ROUTE_ARTICLES} from '../../constants/app.constants';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  usernameOrEmail: string;
  password: string;

  constructor(private auth: AuthService,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.router.navigate([ROUTE_ARTICLES]);
    }
  }

  onSignIn(form: NgForm) {
    this.auth.signIn(this.usernameOrEmail, this.password).subscribe(
      data => {
        this.router.navigate([ROUTE_ARTICLES]);
      },
      error => {
        this.toastr.error(error.error.message);
        console.log('Message: ' + error.error.message);
        console.log(error.error.status);
        console.log(error.error.error);
      }
    );
  }

}
