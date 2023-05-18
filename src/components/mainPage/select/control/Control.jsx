import { components } from 'react-select';
import './control.css';

const Control = ({ children, ...props }) => (
    <components.Control {...props} className={'control'}>
        Filter by region: {children}
    </components.Control>
);

export default Control;
