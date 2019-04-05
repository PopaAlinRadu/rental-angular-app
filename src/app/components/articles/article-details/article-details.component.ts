import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article} from '../../../models/article/article.model';
import {ArticlesService} from '../../../services/article/articles.service';
import {Router} from '@angular/router';

@Component({
  selector: 'article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {

  @Input() article: Article;
  @Input() account: Account;
  @Input() index: number;

  @Output() articleDeleted = new EventEmitter<any>();

  constructor(private articleService: ArticlesService,
              private router: Router) {
  }

  ngOnInit() {

  }

  delete(id: number) {
    this.articleService.deleteArticle(id).subscribe(
      data => {
        this.articleDeleted.emit(data);
      },
      error => {
        console.log(error);
      }
    );
  }



}
