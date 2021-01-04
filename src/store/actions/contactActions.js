import { stationService } from "../../services/stationService";

export function loadStations() {
    return async (dispatch) => {
        const stations = await stationService.getStations()
        dispatch({type:"SET_STATIONS", stations})
    }
}

export function getStationById(id){
    return async (dispatch) => {
        const station = await stationService.getStationById(id)
        dispatch({type:"SET_STATION",station})
    }
}

export function saveStation(station) {
    return async (dispatch) => {
        const isEdit = station._id ? true : false
        station = await stationService.saveStation(station)
        if (isEdit) dispatch({type: 'UPDATE_STATION',station})
        else dispatch({type: 'ADD_STATION',station})
        return station
    }
}


export function removeStation(id){
    return async (dispatch) => {
        await stationService.removeStation(id)
        dispatch({type:'REMOVE_STATION',id})
    }
}