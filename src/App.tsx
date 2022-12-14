import React from 'react';
import './App.css';
import Main from "./ui/main/Main";
import {HashRouter} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Main/>
            </HashRouter>
        </div>
    );
}

export default App;
