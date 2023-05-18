const ShowMoreBtn = (props) => {
    return (
        <div>
            {props.isAllCountries === false && (
                <div className={'showMore'}>
                    <button onClick={props.showMore}>Show more</button>
                </div>
            )}
        </div>
    );
};

export default ShowMoreBtn;
