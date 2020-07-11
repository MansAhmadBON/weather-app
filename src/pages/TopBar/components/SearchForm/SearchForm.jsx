import React from "react";
import TextField  from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';

import './SearchForm.scss';

function SearchForm() {
    return (
        <form className="search-form">
            <div className="wrapper-input">
                <TextField  label="City" variant="outlined" className={"search-input"} autoFocus={true} />
            </div>
            <IconButton>
                <LocationSearchingIcon />
            </IconButton>
        </form>
    )
}

export default SearchForm;
