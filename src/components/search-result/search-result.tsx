import React, { FC, useEffect } from 'react';

import { CountryResponse } from '../../services/typings';
import { push } from "connected-react-router";
import { connect } from 'react-redux';
import { AppState } from '../../store/typings';

import './search-result.scss';
import { selectcountriesState } from '../../store/countries/selectors';

interface SearchResultProps {
    countries: CountryResponse[];

    push(path: string): void;
}

const mapStateToProps = (state: AppState) => ({
    countries: selectcountriesState(state)
});

const mapDispatchToProps = {
    push
};

const SearchResult: FC<SearchResultProps> = (props: SearchResultProps) => {
    const { countries } = props;
    useEffect(() => {
        console.log(countries);
    });
    // const navigate = () => props.push('country.name');
    return (
        <div className='search-result'>
            {
                countries && countries.map(country => {
                    return <span>{ country.name }</span>
                })
            }
        </div>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchResult);
