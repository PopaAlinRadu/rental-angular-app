export class Account {

  public id: number;
  public username: string;
  public email: string;
  public password: string;

  public constructor(id: number, username: string, email: string, password: string) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
