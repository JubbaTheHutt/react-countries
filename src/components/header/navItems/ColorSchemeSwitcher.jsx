import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import * as PropTypes from 'prop-types';

const ColorSchemeSwitcher = (props) => {
    return (
        <div>
            <button
                className={
                    props.colorScheme === 'Dark'
                        ? 'darkMode headerItem'
                        : 'lightMode headerItem'
                }
                onClick={props.onClick}
            >
                {props.colorScheme === 'Dark' ? (
                    <BsFillMoonFill />
                ) : (
                    <BsFillSunFill />
                )}
                {props.colorScheme} Mode
            </button>
        </div>
    );
};

ColorSchemeSwitcher.propTypes = {
    colorScheme: PropTypes.any,
    onClick: PropTypes.func,
};

export default ColorSchemeSwitcher;
