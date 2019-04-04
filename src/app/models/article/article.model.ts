import {Account} from '../account/account.model';

export class Article {

  public constructor(public id: number,
                     public title: string,
                     public description: string,
                     public account: Account) {
  }
}
