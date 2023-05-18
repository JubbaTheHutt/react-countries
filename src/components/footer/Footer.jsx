import './footer.css';
import { AiFillHeart } from 'react-icons/ai';
const Footer = () => {
    return (
        <footer>
            <span className={'footerInfo'}>
                Made with <AiFillHeart /> by{' '}
                <a href='https://github.com/JubbaTheHutt'>JubbaTheHutt</a>
            </span>
        </footer>
    );
};

export default Footer;
