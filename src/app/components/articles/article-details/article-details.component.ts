import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

import {ArticlesService} from '../../../services/article/articles.service';
import {Article} from '../../../models/article/article';
import {Account} from '../../../models/account/account';
import {ApiResponse} from '../../../models/api-response/api-response';

@Component({
  selector: 'article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {

  @Input() article: Article;
  @Input() account: Account;
  @Input() index: number;

  @Output() articleDeleted = new EventEmitter<ApiResponse>();

  constructor(private articleService: ArticlesService,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit() {
  }

  delete(id: number) {
    this.articleService.deleteArticle(id).subscribe(
      (apiResponse: ApiResponse) => {
        this.toastr.success('Article with id: ' + apiResponse.data.id + ' and Title: ' + apiResponse.data.title, 'Successfully Deleted');
        this.articleDeleted.emit(apiResponse);
      },
      error => {
        console.log(error);
      }
    );
  }

}

