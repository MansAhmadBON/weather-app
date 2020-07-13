import {ADD_GEO_DATA} from '../../constants';

const initialState = {
    city: '',
    lat: '',
    lon: ''
};

const ReducerGeoData = (state = initialState, {type, geoData}) => {
    switch (type) {
        case ADD_GEO_DATA:
            return {
                city: geoData.city,
                lat: geoData.lat,
                lon: geoData.lon,
            };
        default: return state;
    }
};

export default ReducerGeoData;