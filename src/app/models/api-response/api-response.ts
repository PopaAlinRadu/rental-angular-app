import {Article} from '../article/article';
import {Account} from '../account/account';

export interface ApiResponse {

  data: Article & Account;
  resourceLocation: string | null;
  success: boolean;
}


