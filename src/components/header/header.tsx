import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import { Button, Filters } from '..';
import { dispatcher, push } from '../../store/helper';
import { setQueryString } from '../../store/query-string/actions';
import { fetchCountries } from '../../store/countries/actions';

import './header.scss';

export const Header: FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch<Dispatch>();
    const [ value, setValue ] = useState('');
    const [ filterName, setFilter ] = useState('all');
    const isDisabledSearchInput: boolean = filterName === 'all';

    const handleChange = (e: any) => {
        dispatcher(dispatch, setQueryString, filterName + '/' + e.target.value);
        setValue(e.target.value);
        dispatcher(dispatch, fetchCountries);
    };

    const submitEvent = () => {
        dispatcher(dispatch, fetchCountries);
        dispatcher(dispatch, setQueryString, '');
        push(dispatch, '/');
    };

    const selectFilter = (e: any) => {
        const id: string = e.target.id;

        if ( filterName === id ) return;

        setFilter(id);
        setValue('');
        dispatcher(dispatch, setQueryString, value);
    };

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
                        className='search-button'
                        name={ t('search.search') }/>
            </div>
            <Filters onClick={ selectFilter } filterName={ filterName }/>
        </div>
    );
};

export default Header;
