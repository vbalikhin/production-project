import React from 'react';
import {Link} from 'react-router-dom'
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/router";


const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames(`app`, {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/info'}>Инфо</Link>
            <AppRouter/>
        </div>
    );
};

export default App;