const INITIAL_STATE = {
    user: null
}

export function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "SET_USER":
        return { ...state, user: action.newUser };
      default: 
        return state;
    }
  }
  