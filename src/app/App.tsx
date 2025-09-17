import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {Info} from "pages/Info";
import {Main} from "pages/Main";


const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames(`app`, {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/info'}>Инфо</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<Main/>}/>
                    <Route path={'/info'} element={<Info/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;