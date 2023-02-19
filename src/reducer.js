export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: "App.jsx:35 BQCpWJzI4_Y6Alc53Ww4fDUZIdK6H80JeBSlKokJpFm5qB7YJym8YJmhzbyBxlASGd8W9Ec1zJq5yoBXdYKvhQA5mTrV42QsPo5EkhtlvmdlXCidbmXn3HCkOp16oZvcga8u17Sk3UKHmUCJrRY65YEKPdOAlxKPszeYeOqPL7uaK3yic9YLw7KQSI-Z8tTdr2H9"
};

const reducer = (state, action) => {

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

      case "SET_TOKEN":
        return {
          ...state,
          token: action.token
        }

    default:
      return state;
      break;
  }
};

export default reducer;
