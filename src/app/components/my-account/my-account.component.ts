import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../services/account/account.service';

import {Account} from '../../models/account/account';
import {Article} from '../../models/article/article';
import {ACCOUNT_ID, AUTHENTICATED_USER} from '../../constants/app.constants';
import {ArticlesService} from '../../services/article/articles.service';
import {ActivatedRoute, Router} from '@angular/router';

const VIEW_ARTICLES = 'View Articles';
const HIDE_ARTICLES = 'Hide Articles';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  account: Account;
  myArticles: Article[] = [];

  isDisplayed = false;
  message: string;

  constructor(private accountService: AccountService,
              private articleService: ArticlesService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getAccountDetailsByUsername(sessionStorage.getItem(AUTHENTICATED_USER));
    this.getMyArticles(Number(sessionStorage.getItem(ACCOUNT_ID)));
    this.message = VIEW_ARTICLES;
  }

  changeArticlesList($event, index: number) {
    this.myArticles.splice(index, 1);
  }

  getAccountDetailsByUsername(usernameOrEmail: string) {
    this.accountService.getAccountDetailsByUsername(usernameOrEmail).subscribe(
      (account: Account) => {
        this.account = account;
      },
      error => {
        console.log('Error:' + error);
      }
    );
  }

  getMyArticles(id: number) {
    this.articleService.getMyArticles(id).subscribe(
      data => {
        this.myArticles = (data) ? data.data : null;
      },
      error => {
        console.log(error.error);
      }
    );
  }

  changeMessage() {
    this.isDisplayed = !this.isDisplayed;
    if (this.isDisplayed) {
      this.message = HIDE_ARTICLES;
    } else {
      this.message = VIEW_ARTICLES;
    }
  }

  addArticle() {
    this.router.navigate(['article'], {relativeTo: this.route});
  }

}
