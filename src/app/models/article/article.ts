import {Account} from '../account/account';

export interface Article {

  id: number | null;
  title: string;
  description: string;
  account: Account | null;

}
