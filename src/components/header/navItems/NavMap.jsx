import { NavLink } from 'react-router-dom';
import { FaMapMarkedAlt } from 'react-icons/fa';

const NavMap = () => {
    return (
        <div className={'map'}>
            <NavLink
                to={'/map'}
                className={(navData) =>
                    navData.isActive ? 'headerItem active' : 'headerItem'
                }
            >
                <FaMapMarkedAlt />
                Map
            </NavLink>
        </div>
    );
};

export default NavMap;
