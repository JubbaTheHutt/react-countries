import './mainPage.css';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import Control from './select/control/Control.jsx';
import Country from './country/Country.jsx';
import { useSelector } from 'react-redux';
import ShowMoreBtn from './showMoreBtn/ShowMoreBtn.jsx';
import SearchBar from './searchBar/SearchBar.jsx';

const MainPage = () => {
    const colorScheme = useSelector((state) => state.countries.colorMode);
    const countriesApi = useSelector((state) => state.countries.countries);

    const options = [
        { value: 'all', label: 'All' },
        { value: 'africa', label: 'Africa' },
        { value: 'europe', label: 'Europe' },
        { value: 'asia', label: 'Asia' },
        { value: 'americas', label: 'Americas' },
        { value: 'oceania', label: 'Oceania' },
        { value: 'antarctica', label: 'Antarctica' },
    ];

    const [selected, setSelected] = useState(options[0]);
    const [searchBar, setSearchBar] = useState('');
    const [countriesCount, setCountriesCount] = useState(20);
    const [filteredCountries, setFilteredCountries] = useState(countriesApi);
    const [isAllCountries, setIsAllCountries] = useState(false);

    useEffect(() => {
        if (
            countriesCount >= countriesApi.length ||
            countriesCount >= filteredCountries.length
        ) {
            setIsAllCountries(true);
        } else setIsAllCountries(false);
    }, [
        countriesCount,
        countriesApi,
        filteredCountries.length,
        isAllCountries,
    ]);

    const darkFilter = {
        option: (defaultStyles, state) => ({
            ...defaultStyles,
            color: !state.isSelected ? '#fff' : '#2dddfc',
            backgroundColor: !state.isSelected ? '#2b3945' : '#334452',
        }),

        menu: (defaultStyles) => ({
            ...defaultStyles,
            backgroundColor: '#2b3945',
        }),

        control: (defaultStyles) => ({
            ...defaultStyles,
            backgroundColor: '#2b3945',
            padding: '10px',
            border: 'none',
            width: '300px',
            boxShadow: '#d5d5d5 0 0 4px',
            cursor: 'pointer',
        }),

        singleValue: (defaultStyles) => ({ ...defaultStyles, color: '#fff' }),
    };
    const lightFilter = {
        option: (defaultStyles, state) => ({
            ...defaultStyles,
            color: !state.isSelected ? '#000' : '#fff',
            backgroundColor: !state.isSelected ? '#fff' : '#2dddfc',
        }),

        menu: (defaultStyles) => ({
            ...defaultStyles,
            backgroundColor: '#fff',
        }),

        control: (defaultStyles) => ({
            ...defaultStyles,
            backgroundColor: '#fff',
            padding: '10px',
            border: 'none',
            width: '300px',
            boxShadow: '#d5d5d5 0 0 4px',
            cursor: 'pointer',
        }),

        singleValue: (defaultStyles) => ({ ...defaultStyles, color: '#000' }),
    };

    const onSelect = (selectedOption) => {
        setSelected(selectedOption);
        setCountriesCount(20);
    };

    const filterByCountryName = (e) => {
        console.log(searchBar);
        const newSearchBar = e.target.value;

        setSearchBar(newSearchBar);
        const array = countriesApi.filter((item) =>
            item.name.toLowerCase().includes(newSearchBar.toLowerCase())
        );
        newSearchBar.length > 0
            ? setFilteredCountries(array)
            : setFilteredCountries(countriesApi);
        console.log(searchBar);
    };

    useEffect(() => {
        const filterByRegionCountries = () => {
            if (selected.value === 'all') setFilteredCountries(countriesApi);
            else {
                const array = countriesApi.filter(
                    (item) => item.region.toLowerCase() === selected.value
                );
                setFilteredCountries(array);
            }
        };

        filterByRegionCountries();
    }, [selected]);

    function showMore() {
        setCountriesCount(countriesCount + 20);
    }

    return (
        <div className={'mainPage'}>
            <div className={'searchAndFilter'}>
                <SearchBar
                    filterByCountryName={filterByCountryName}
                    searchBar={searchBar}
                />
                <div>
                    <Select
                        styles={
                            colorScheme === 'Dark' ? darkFilter : lightFilter
                        }
                        onChange={onSelect}
                        options={options}
                        value={selected}
                        isSearchable={false}
                        components={{ Control }}
                    />
                </div>
            </div>
            <div className={'countries'}>
                {filteredCountries.length > 0
                    ? filteredCountries
                          .slice(0, countriesCount)
                          .map((item, idx) => <Country key={idx} {...item} />)
                    : countriesApi
                          .slice(0, countriesCount)
                          .map((item, idx) => <Country key={idx} {...item} />)}
            </div>
            <ShowMoreBtn isAllCountries={isAllCountries} showMore={showMore} />
        </div>
    );
};

export default MainPage;
