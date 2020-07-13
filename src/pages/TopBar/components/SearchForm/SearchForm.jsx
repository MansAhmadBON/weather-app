import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';

import TextField  from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';

import {WEATHER_API_KEY, GEO_TOKEN} from '../../../../constants';
import { ACweatherData, ACgeoData } from '../../../../redux/actions';

import './SearchForm.scss';

function SearchForm({addGeoData, addWeatherData}) {
    const [inpVal, setInpVal] = useState('');

    const getWeatherData = geoPosition => {
        fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${geoPosition}&days=3&lang=en&key=${WEATHER_API_KEY}`)
            .then(res => res.json())
            .then(({data, city_name, lat, lon}) => {
                addWeatherData(data);
                addGeoData({city: city_name, lat, lon});
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        new Promise((resolve, rej) => {
            fetch(`https://ipinfo.io/json?token=${GEO_TOKEN}`)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => rej(err))
        }).then(({city}) => getWeatherData(city));
    }, []);


    const handleClick = () => {
        if(inpVal){
            getWeatherData(inpVal);
            setInpVal('');
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        handleClick();
    };


    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <div className="wrapper-input">
                <TextField
                    label="City"
                    variant="outlined"
                    className={"search-input"}
                    autoFocus={true} value={inpVal}
                    onChange={(e) => setInpVal(e.target.value)}/>
            </div>
            <IconButton onClick={handleClick}>
                <LocationSearchingIcon />
            </IconButton>
        </form>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        addGeoData: geoData => dispatch(ACgeoData(geoData)),
        addWeatherData: weatherData => dispatch(ACweatherData(weatherData)),
    }
};

export default connect(
    null,
    mapDispatchToProps
)(SearchForm);
