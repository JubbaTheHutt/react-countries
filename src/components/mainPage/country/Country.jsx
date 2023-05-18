/* eslint-disable react/prop-types */
import './country.css';
const Country = (props) => {
    return (
        <div className={'country'}>
            <div className={'flag'}>
                <img src={props.flag.large} alt='flag' />
            </div>
            <div className={'countryInfo'}>
                <h2>{props.name}</h2>
                <span>Population: {props.population}</span>
                <span>Region: {props.region}</span>
                <span>Capital: {props.capital}</span>
            </div>
        </div>
    );
};

export default Country;
