const INITIAL_STATE = {
    station: null,
    stations: null
}

export function stationReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "SET_STATION":
        return { ...state, station: action.station };
      case "SET_STATIONS":
        return { ...state, stations: action.stations };
      default: 
        return state;
    }
  }