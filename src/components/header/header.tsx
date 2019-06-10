import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Filters } from '..';

import './header.scss';
import { connect } from 'react-redux';
import { AppState } from '../../store/typings';
import { setQueryString } from '../../store/query-string/actions';
import { fetchCountries } from '../../store/countries/actions';

interface HeaderProps {
    setQueryString(payload: string): void;
    fetchCountries(): void;
}

const mapStateToProps = (state: AppState) => ({});

const mapDispatchToProps = {
    setQueryString,
    fetchCountries
};

export const Header: FC<HeaderProps> = (props: HeaderProps) => {
    const { t } = useTranslation();
    const { setQueryString, fetchCountries } = props;
    const [value, setValue] = useState('');
    const [filterName, setFilter] = useState('all');
    const isDisabledSearchInput: boolean = filterName === 'all';

    const handleChange = (e: any) => {
        setQueryString(filterName + '/' + e.target.value);
        setValue(e.target.value);
        fetchCountries();
    };

    const submitEvent = () => fetchCountries();

    const selectFilter = (e: any) => {
        const id: string = e.target.id;

        if (filterName === id) return;

        setFilter(id);
        setValue('');
        setQueryString(value);
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
