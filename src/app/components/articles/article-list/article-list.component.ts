import {Component, OnInit} from '@angular/core';
import {Article} from '../../../models/article/article.model';
import {ArticlesService} from '../../../services/article/articles.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService: ArticlesService) {
  }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articleService.getArticles().subscribe(
      (data) => {
        this.articles = data.data;
      },
      error => {
        console.log('Error' + error);
      }
    );
  }

}
