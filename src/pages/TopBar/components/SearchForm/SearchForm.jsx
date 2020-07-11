import React, {useState, useEffect} from "react";
import TextField  from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';

import {WEATHER_API_KEY, GEO_TOKEN} from '../../../../constants';

import './SearchForm.scss';

function SearchForm() {
    const [inpVal, setInpVal] = useState('');
    const [weatherData, setWeatherData] = useState({});

    const getWeatherData = geoPosition => {
        fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${geoPosition}&days=3&units=S&lang=be&key=${WEATHER_API_KEY}`)
            .then(res => res.json())
            .then(data => setWeatherData(data))
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

    useEffect(() => {
        console.log(weatherData)
    }, [weatherData]);

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

export default SearchForm;
