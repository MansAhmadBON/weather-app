import {ADD_GEO_DATA} from '../../constants';

const ACgeoData = (geoData) => {
    return (dispatch) => {
        dispatch({type: ADD_GEO_DATA, geoData})
    }
};

export default ACgeoData;