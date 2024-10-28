import {Actions} from './@types/actions';

const userReducer = (state: any, action: any) => {
  switch (action.type) {
    case Actions.SET_USER:
      return {
        ...state,
        user: {
          name: action.payload.user.name,
          balance: action.payload.user.balance,
        },
      };

    case Actions.TRANSFER_MONEY:
      return {
        ...state,
        user: {
          ...state.user,
          balance: state.user.balance - action.payload.value,
        },
        users: [
          ...state.users.filter(
            item =>
              item.name !== state.user.name && item.name !== action.payload.to,
          ),
          {
            name: state.user.name,
            balance: state.user.balance - action.payload.value,
          },
          {
            name: action.payload.to,
            balance:
              state.users.find(one => one.name === action.payload.to).balance +
              action.payload.value,
          },
        ],
      };

    default:
      return {};
  }
};

export default userReducer;
