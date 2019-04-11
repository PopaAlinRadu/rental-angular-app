import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ARTICLES_BASE} from '../../constants/app.constants';
import {Article} from '../../models/article/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) {
  }

  getArticles() {
    return this.http.get<any>(API_ARTICLES_BASE);
  }

  getMyArticles(id: number) {
    return this.http.get<any>(`${API_ARTICLES_BASE}/user/${id}`);
  }

  saveArticle(article: Article) {
    return this.http.post<any>(`${API_ARTICLES_BASE}`, article);
  }

  deleteArticle(id: number) {
    return this.http.delete(`${API_ARTICLES_BASE}/${id}`);
  }

}
