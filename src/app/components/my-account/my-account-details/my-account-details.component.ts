import {Component, Input} from '@angular/core';

import {Account} from '../../../models/account/account';
import {AccountService} from '../../../services/account/account.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/authentication/auth.service';
import {MDBModalRef, MDBModalService} from 'angular-bootstrap-md';
import {ModalComponent} from '../../modal/modal.component';

@Component({
  selector: 'my-account-details',
  templateUrl: './my-account-details.component.html',
  styleUrls: ['./my-account-details.component.scss']
})
export class MyAccountDetailsComponent {

  modalRef: MDBModalRef;
  @Input() account: Account;

  constructor(private modalService: MDBModalService) {
  }

  isDisplayed = false;

  onClick() {
    this.isDisplayed = !this.isDisplayed;
  }

  openDeleteModal() {
    this.modalRef = this.modalService.show(ModalComponent, {
      data: {
        id: this.account.id,
        heading: 'Delete Account',
        message: 'Are you sure you want to delete Account?',
        actions: {
          cancel: 'Cancel',
          confirm: 'Confirm'
        },
      }
    });
  }

}
