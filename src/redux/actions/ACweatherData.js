import {ADD_WEATHER_DATA} from '../../constants';

const ACweatherData = (weatherData) => {
    return (dispatch) => {
        dispatch({type: ADD_WEATHER_DATA, weatherData})
    }
};

export default ACweatherData;