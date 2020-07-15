import React from "react";
import {connect} from 'react-redux';
import {Typography} from "@material-ui/core";
import {TopBar} from "../index";
import {WeatherTable} from '../../components';

import './App.scss';

function App({city}) {
    return (
        <div className="app">
            <TopBar />
            <div className="title-box">
                <Typography variant="h1" component="h1" align="center">
                    Weather Application
                </Typography>
                <Typography variant="h3" component="h3" align="center">
                    Weather forecast in {city}
                </Typography>
            </div>
            <main>
                <WeatherTable />
            </main>
        </div>
    )
}

const mapStateToProps = state => ({
    city: state.geoData.city
});

export default connect(
    mapStateToProps
)(App);