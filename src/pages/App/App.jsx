import React from "react";
import {TopBar} from "../index";

import './App.scss';

function App() {
    return (
        <div className="app">
            <TopBar />
            <main>
                Content
            </main>
        </div>
    )
}

export default App;