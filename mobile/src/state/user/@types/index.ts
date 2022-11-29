import {ReactElement} from 'react';
import {User} from '../../../models/user';

export type State = {
  user: User;
  users: User[];
};

export type UserProviderType = {
  children: ReactElement | ReactElement[];
};
