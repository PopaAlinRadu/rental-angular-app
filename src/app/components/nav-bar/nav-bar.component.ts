import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/authentication/auth.service';
import {Router} from '@angular/router';
import {ROUTE_ARTICLES, ROUTE_LOGIN} from '../../constants/app.constants';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public auth: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  logOut() {
    this.auth.logOut();
  }

  navigate() {
    if (this.auth.isAuthenticated()) {
      this.router.navigate([ROUTE_ARTICLES]);
    } else {
      this.router.navigate([ROUTE_LOGIN]);
    }
  }
}
