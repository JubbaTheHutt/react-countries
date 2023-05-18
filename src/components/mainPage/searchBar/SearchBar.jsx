import { AiOutlineSearch } from 'react-icons/ai';
import { useRef } from 'react';

const SearchBar = (props) => {
    const ref = useRef(null);

    const focusOnClick = () => {
        ref.current.focus();
    };

    return (
        <div>
            <div onClick={focusOnClick} className={'searchbar'}>
                <AiOutlineSearch />
                <input
                    ref={ref}
                    onChange={(e) => props.filterByCountryName(e)}
                    value={props.searchBar}
                    type='text'
                    placeholder='Search for a country...'
                />
            </div>
        </div>
    );
};

export default SearchBar;
