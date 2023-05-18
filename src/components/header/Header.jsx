import './header.css';
import { useDispatch, useSelector } from 'react-redux';
import { switchMode } from '../../redux/mainReducer.js';
import Logo from './logo/Logo.jsx';
import NavHome from './navItems/NavHome.jsx';
import NavMap from './navItems/NavMap.jsx';
import ColorSchemeSwitcher from './navItems/ColorSchemeSwitcher.jsx';

const Header = () => {
    const dispatch = useDispatch();
    const colorScheme = useSelector((state) => state.countries.colorMode);

    return (
        <header>
            <Logo />
            <div className={'navButtons'}>
                <NavHome />
                <NavMap />
                <ColorSchemeSwitcher
                    colorScheme={colorScheme}
                    onClick={() =>
                        dispatch(
                            switchMode(
                                colorScheme === 'Dark' ? 'Light' : 'Dark'
                            )
                        )
                    }
                />
            </div>
        </header>
    );
};

export default Header;
