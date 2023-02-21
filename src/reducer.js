export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  // token: "App.jsx:35 BQCpWJzI4_Y6Alc53Ww4fDUZIdK6H80JeBSlKokJpFm5qB7YJym8YJmhzbyBxlASGd8W9Ec1zJq5yoBXdYKvhQA5mTrV42QsPo5EkhtlvmdlXCidbmXn3HCkOp16oZvcga8u17Sk3UKHmUCJrRY65YEKPdOAlxKPszeYeOqPL7uaK3yic9YLw7KQSI-Z8tTdr2H9"
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

        case "SET_PLAYLISTS":
          return {
            ...state,
            playlists: action.playlists
          }

          case "SET_DISCOVER_WEEKLY":
            return {
              ...state,
              discover_weekly: action.discover_weekly,
            }
          case "SET_PLAYING":
            return {
              ...state,
              playing: action.playing,
            };

          case "SET_ITEM":
            return {
              ...state,
              item: action.item,
            };

          case "SET_SPOTIFY":
            return {
              ...state,
              spotify: action.spotify,
            };

    default:
      return state;
      break;
  }
};

export default reducer;
