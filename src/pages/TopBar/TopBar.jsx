import React from "react";
import {SearchForm} from './components';

import './TopBar.scss';

function TopBar() {
    return (
        <header className="header-app">
            <SearchForm/>
        </header>
    )
}

export default TopBar;