import React, { FC, ReactNode } from 'react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';

import { CountryResponse } from '../../services/typings';
import { AppState } from '../../store/typings';

import './search-result.scss';
import { selectcountries } from '../../store/countries/selectors';
import { Icon } from '..';

interface SearchResultProps {
    countries: CountryResponse[];

    push(path: string): void;
}

const mapStateToProps = (state: AppState) => ({
    countries: selectcountries(state)
});

const mapDispatchToProps = { push };

const SearchResult: FC<SearchResultProps> = (props: SearchResultProps) => {
    const { countries } = props;
    // const navigate = () => props.push('country.name');

    const iconMore: ReactNode = (
        <Icon iconPrefix={ 'fas' }
              className='icon-down'
              icon='chevron-down'/>
    );

    return (
        <>
            <div className='search-result'>
                {
                    countries && countries.map(country => {
                        return (
                            <div className='search-item'>
                                <span key={ country.alpha2Code }>{ country.name }</span>
                                <img className='flag' src={ country.flag } alt={ country.name }/>
                            </div>
                        )
                    })
                }

            </div>
            { countries.length > 7 && iconMore }
        </>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchResult);
