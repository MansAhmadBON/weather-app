import {ADD_WEATHER_DATA} from '../../constants';

const initialState = [];

const ReducerWeatherData = (state = initialState, {type, weatherData}) => {
    switch (type) {
        case ADD_WEATHER_DATA:
            return [...weatherData];
        default: return state
    }
};

export default ReducerWeatherData;