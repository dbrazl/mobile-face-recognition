import React, {createContext, useMemo, useReducer} from 'react';
import {UserProviderType} from './@types';
import userReducer from './reducer';

const initialState: any = {
  user: {
    name: 'Daniel',
    balance: 50000,
  },
  users: [
    {
      name: 'Daniel',
      balance: 50000,
    },
    {
      name: 'Camila',
      balance: 80000,
    },
    {
      name: 'Renan',
      balance: 20000,
    },
  ],
};

export const UserContext = createContext(initialState);

const UserProvider: React.FC<UserProviderType> = ({children}) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const provider = useMemo(() => ({state, dispatch}), [state, dispatch]);

  return (
    <UserContext.Provider value={provider}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
