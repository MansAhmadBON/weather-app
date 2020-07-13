import {combineReducers} from "redux";
import ReducerWeatherData from './ReducerWeatherData';
import ReducerGeoData from "./ReducerGeoData";

export default combineReducers({
    weatherData: ReducerWeatherData,
    geoData: ReducerGeoData
})
