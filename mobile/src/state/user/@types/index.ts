import {ReactElement} from 'react';

export type State = {
  user: {
    name: string;
    balance: number;
  };
};

export type UserProviderType = {
  children: ReactElement | ReactElement[];
};
