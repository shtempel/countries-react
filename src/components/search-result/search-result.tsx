import React, { FC, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { CountryResponse } from '../../services/typings';
import { fetchCountryByAlpha } from '../../store/countries/actions';
import { dispatcher, push } from '../../store/helper';
import { setQueryString } from '../../store/query-string/actions';
import { AppState } from '../../store/typings';
import { selectCountries } from '../../store/countries/selectors';
import { Icon } from '..';

import './search-result.scss';

const SearchResult: FC = () => {
    const dispatch = useDispatch<Dispatch>();
    const  countries  = useSelector<AppState, CountryResponse[]>(selectCountries);

    const navigate = (e: any) => {
        push(dispatch,'/');
        push(dispatch,`country/:${ e.target.id }`);
        dispatcher(dispatch, setQueryString, `alpha/${ e.target.id }`);
        dispatcher(dispatch, fetchCountryByAlpha);
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

export default SearchResult;
