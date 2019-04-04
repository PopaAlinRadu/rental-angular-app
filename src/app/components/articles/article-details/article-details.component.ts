import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../../models/article/article.model';

@Component({
  selector: 'article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {

  @Input() article: Article;
  @Input() account: Account;
  @Input() index: number;



  constructor() {
  }

  ngOnInit() {

  }


}
