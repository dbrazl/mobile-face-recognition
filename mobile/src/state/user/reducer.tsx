/* eslint-disable @typescript-eslint/no-explicit-any */
import {Actions} from './@types/actions';

const userReducer = (state: any, action: any) => {
  switch (action.type) {
    case Actions.SET_USER:
      return {
        ...state,
        user: {
          name: action.payload.name,
          balance: action.payload.balance,
        },
      };

    default:
      return {};
  }
};

export default userReducer;
