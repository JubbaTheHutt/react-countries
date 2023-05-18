import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NavHome = () => {
    return (
        <div className={'home'}>
            <NavLink
                className={(navData) =>
                    navData.isActive ? `headerItem active` : 'headerItem'
                }
                to={'/home'}
            >
                <FaHome />
                Home
            </NavLink>
        </div>
    );
};

export default NavHome;
