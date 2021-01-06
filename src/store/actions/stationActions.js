import { stationService } from "../../services/stationService";

export function loadStations(filterBy) {
    console.log('loading stations');
    return async (dispatch) => {
        const stations = await stationService.query(filterBy)
        dispatch({type:"SET_STATIONS", stations})
        return stations;
    }
}

export function getStationById(id){
    console.log("id in action:",id)
    return async (dispatch) => {
        const station = await stationService.getStationById(id)
        console.log('station in action:',station)
        dispatch({type:"SET_STATION",station})
        return station
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