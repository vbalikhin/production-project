import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import {MainLazy} from "./pages/Main/Main.lazy";
import {InfoLazy} from "./pages/Info/Info.lazy";
import './styles/index.scss'
import {useTheme} from "./theme/useTheme";


const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/info'}>Инфо</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainLazy/>}/>
                    <Route path={'/info'} element={<InfoLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;