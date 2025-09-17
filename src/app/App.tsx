import React from 'react';
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/router";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames(`app`, {}, [theme])}>
            <Navbar/>
            <button onClick={toggleTheme}>Toggle</button>
            <AppRouter/>
        </div>
    );
};

export default App;