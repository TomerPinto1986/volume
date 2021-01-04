import { httpService } from "./httpService"

export const stationService = {
    query,
    // getById,
    // save,
    // remove,
};

function query() {
    try{
        return httpService.get(`station`);
    } catch (err) {
        throw err
    }
}



