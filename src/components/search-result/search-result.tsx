import React, { FC, ReactNode } from 'react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';

import { CountryResponse } from '../../services/typings';
import { fetchCountryByAlpha } from '../../store/countries/actions';
import { setQueryString } from '../../store/query-string/actions';
import { AppState } from '../../store/typings';
import { selectCountries } from '../../store/countries/selectors';
import { Icon } from '..';

import './search-result.scss';

interface SearchResultProps {
    countries: CountryResponse[];

    push(path: string): void;
    fetchCountryByAlpha(): void;
    setQueryString(query: string): void
}

const mapStateToProps = (state: AppState) => ({
    countries: selectCountries(state)
});

const mapDispatchToProps = { push, fetchCountryByAlpha, setQueryString };

const SearchResult: FC<SearchResultProps> = (props: SearchResultProps) => {
    const { countries, fetchCountryByAlpha, setQueryString, push } = props;

    const navigate = (e: any) => {
        push('/');
        push(`country/:${ e.target.id }`);
        setQueryString(`alpha/${ e.target.id }`);
        fetchCountryByAlpha();
    };

    const iconMore: ReactNode = countries.length > 7 && (
        <Icon iconPrefix={ 'fas' }
              className='icon-down'
              icon='chevron-down'/>
    );

    return (
        <>
            <div className='search-result'>
                {
                    countries.length > 0 && countries.map(country => {
                        return (
                            <div key={ country.alpha2Code } className='search-item'>
                                <span onClick={ navigate } id={ country.alpha2Code }>{ country.name }</span>
                                <img className='flag' src={ country.flag } alt={ country.name }/>
                            </div>
                        )
                    })
                }
            </div>
            { iconMore }
        </>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchResult);
