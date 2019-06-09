import React, { FC, ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, FilterPill, searchFilterMap } from '..';
import { CountryResponse } from '../../services/typings';
import countriesService from './../../services/countries-service';

import './header.scss';

export const Header: FC = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const [filterName, setFilter] = useState('all');
    const initialState: CountryResponse[] = [];
    const [response, setResponse] = useState(initialState);
    const isDisabledSearchInput: boolean = filterName === 'all';

    const handleChange = (e: any) => {
        setValue(e.target.value);

        getCountries(e.target.value);
    };

    const submitEvent = () => getCountries(value);

    const getCountries = (query: string) => {
        filterName === 'all'
            ? countriesService.getCountries(`${ filterName }`)
                .then(res => setResponse(res))
            : countriesService.getCountries(`${ filterName }/${ query }`)
                .then((res: CountryResponse[]) => setResponse(res))
                .catch(error => setResponse([]))
    };

    const selectFilter = (e: any) => {
        const id: string = e.target.id;

        if (filterName === id) return;

        setFilter(id);
        setValue('');
    };

    const filters: ReactNode = (
        <div className='filters'>
            {
                searchFilterMap.map(
                    (filter: { id: string, title: string }) =>
                        <FilterPill onClick={ selectFilter }
                                    id={ filter.id }
                                    key={ filter.id }
                                    title={ t(filter.title) }
                                    isSelected={ filterName === filter.id }/>
                )
            }
        </div>
    );

    const searchResult: ReactNode = response && (
        <div>
            {
                response.map(country => {
                    return (
                        <div className='search-result'>
                            <span>{ country.name }</span>
                        </div>
                    );
                })
            }
        </div>
    );

    return (
        <div className='header'>
            <div className='search-form'>
                <input className='search-input'
                       type='search'
                       disabled={ isDisabledSearchInput }
                       placeholder={ `${ t('search.searchBy') } ${ filterName }` }
                       onKeyPress={ submitEvent }
                       value={ value }
                       onChange={ handleChange }/>
                <Button type='button'
                        onClick={ submitEvent }
                        class='search-button'
                        name={ t('search.search') }/>
            </div>
            { filters }
            { searchResult }
        </div>
    );
};
