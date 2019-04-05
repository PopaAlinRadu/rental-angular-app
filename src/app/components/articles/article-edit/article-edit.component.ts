import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

import {ROUTE_MY_ACCOUNT} from '../../../constants/app.constants';
import {ArticlesService} from '../../../services/article/articles.service';

@Component({
  selector: 'article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {

  article: any;

  constructor(private articleService: ArticlesService,
              private route: Router) {
  }

  ngOnInit() {
  }

  onSave(form: NgForm) {
    const value = form.value;
    this.article = {title: value.title, description: value.description};
    this.articleService.saveArticle(this.article).subscribe(
      data => {
        this.route.navigate([`${ROUTE_MY_ACCOUNT}`]);
      },
      error => {
        console.log('Error: ' + error);
      }
    );
  }

}
