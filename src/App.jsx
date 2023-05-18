import MainPage from './components/mainPage/MainPage.jsx';
import Header from './components/header/Header.jsx';
import './App.css';
import Footer from './components/footer/Footer.jsx';
import { Route, Routes } from 'react-router-dom';
import MapPage from './components/mapPage/MapPage.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCountries } from './redux/mainReducer.js';

function App() {
    const colorScheme = useSelector((state) => state.countries.colorMode);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCountries());
    }, []);

    return (
        <div
            className={'App-container'}
            id={colorScheme === 'Dark' ? 'Dark' : 'Light'}
        >
            <Header />
            <div>
                <Routes>
                    <Route path={'/home'} element={<MainPage />} />
                    <Route path={'/map'} element={<MapPage />} />
                    <Route path={'/'} element={<MainPage />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
