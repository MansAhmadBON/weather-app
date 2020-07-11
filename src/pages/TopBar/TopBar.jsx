import React from "react";
import {Controls, SearchForm} from './components';

function TopBar() {
    return (
        <header>
            <div className="container-content header-content">
                <Controls />
                <SearchForm/>
            </div>
        </header>
    )
}

export default TopBar;