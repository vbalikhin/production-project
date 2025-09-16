import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import './index.scss'
import {MainLazy} from "./pages/Main/Main.lazy";
import {InfoLazy} from "./pages/Info/Info.lazy";

const App = () => {
    return (
        <div className={'app'}>
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