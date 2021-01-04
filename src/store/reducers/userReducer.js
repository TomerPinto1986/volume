const INITIAL_STATE = {
    user: null
}

export function userReducer(state = INITIAL_STATE, action) {
    console.log(state);
    switch (action.type) {
      case "SET_USER":
        return { ...state, user: action.newUser };
      default: 
      console.log(state);
        return state;
    }
  }
  