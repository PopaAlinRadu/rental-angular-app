import {Component, Input} from '@angular/core';

import {Account} from '../../../models/account/account';

@Component({
  selector: 'my-account-details',
  templateUrl: './my-account-details.component.html',
  styleUrls: ['./my-account-details.component.scss']
})
export class MyAccountDetailsComponent {

  @Input() account: Account;

  isDisplayed = false;

  onClick() {
    this.isDisplayed = !this.isDisplayed;
  }
}
