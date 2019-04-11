import {Role} from '../role/role';

export interface Account {

  id: number;
  username: string;
  email: string;
  password: string | null;
  roles: Role[] | null;
}
