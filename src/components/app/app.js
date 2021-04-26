import React from 'react';

import style from '../../assets/styles/scss/app.module.scss'
import Header from "../header/header";

const App = () => {
    return (
        <div className={style.main}>
            <Header/>
        </div>
    );
};

export default App;