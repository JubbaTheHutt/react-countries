import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <div className={'logoBlock'}>
            <NavLink to={'/home'} className={'logo'}>
                Countries
            </NavLink>
        </div>
    );
};

export default Logo;
