import {Component, OnInit} from '@angular/core';
import {MDBModalRef} from 'angular-bootstrap-md';
import {AccountService} from '../../services/account/account.service';
import {AuthService} from '../../services/authentication/auth.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  heading: string;
  message: string;
  actions: any;
  id: number;

  constructor(public modalRef: MDBModalRef,
              private accountService: AccountService,
              private authService: AuthService) {
  }

  ngOnInit() {
  }

  deleteAccount(id: number) {
    this.accountService.deleteAccount(id).subscribe(
      data => {
        console.log(data);
        this.authService.logOut();
      },
      error => {
        console.log(error);
      }
    );
  }
}
