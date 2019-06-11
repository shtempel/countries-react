import { push } from 'connected-react-router';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { Button, Filters } from '..';
import { setQueryString } from '../../store/query-string/actions';
import { fetchCountries } from '../../store/countries/actions';

import './header.scss';

interface HeaderProps {
    fetchCountries(): void;
    setQueryString(query: string): void
    push(path: string): void;
}

const mapDispatchToProps = {
    setQueryString,
    fetchCountries,
    push
};

export const Header: FC<HeaderProps> = (props: HeaderProps) => {
    const { t } = useTranslation();
    const { setQueryString, fetchCountries, push } = props;
    const [ value, setValue ] = useState('');
    const [ filterName, setFilter ] = useState('all');
    const isDisabledSearchInput: boolean = filterName === 'all';

    const handleChange = (e: any) => {
        setQueryString(filterName + '/' + e.target.value);
        setValue(e.target.value);
        fetchCountries();
    };

    const submitEvent = () => {
        fetchCountries();
        setQueryString('');
        push('/');
    };

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
    null,
    mapDispatchToProps
)(Header);
