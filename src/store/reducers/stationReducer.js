const INITIAL_STATE = {
    station: null
}

export function stationReducer(state = INITIAL_STATE, action) {
    console.log(state);
    switch (action.type) {
      case "SET_STATION":
        return { ...state, station: action.station };
      default: 
      console.log(state);
        return state;
    }
  }