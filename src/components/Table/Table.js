import React from 'react';
import {connect} from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const WeatherTable = ({weatherData, geoData}) => {
    console.log(weatherData);
    console.log(geoData);
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Date</TableCell>
                        <TableCell align="left">Current temp</TableCell>
                        <TableCell align="left">Max temp</TableCell>
                        <TableCell align="left">Min temp</TableCell>
                        <TableCell align="left">Wind direction</TableCell>
                        <TableCell align="left">Wind speed</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        weatherData.map(row => (
                            <TableRow key={row.sunset_ts}>
                                <TableCell align="left" component="th" scope="row">{row.datetime}</TableCell>
                                <TableCell align="left">{row.temp}</TableCell>
                                <TableCell align="left">{row.max_temp}</TableCell>
                                <TableCell align="left">{row.min_temp}</TableCell>
                                <TableCell align="left">{row.wind_cdir_full}</TableCell>
                                <TableCell align="left">{row.wind_spd}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer >
    )
};

const mapStateToProps = state => ({
    weatherData: state.weatherData,
    geoData: state.geoData
});

export default connect(
    mapStateToProps
)(WeatherTable)