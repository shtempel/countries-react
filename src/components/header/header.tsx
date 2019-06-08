import React, { FC, useState } from 'react';

import { Button } from '..';

import './header.scss';

interface HeaderProps {

}

export const Header: FC<HeaderProps> = (props: HeaderProps) => {
    const isLoading: boolean = false;
    const [value, setValue] = useState('');
    const [filterName, setFilter] = useState('all_countries');

    const handleChange = (e: any) => setValue(e.target.value);

    const submitEvent = () => '';

    return (
        <div className='header'>
            <div className='search-form'>
                <input className='search-input'
                       type='search'
                       placeholder={ filterName }
                       onKeyPress={ submitEvent }
                       value={ value }
                       onChange={ handleChange }/>
                <Button type='button'
                        class='search-button'
                        disabledCondition={ isLoading }
                        name='search'/>
            </div>
        </div>
    );
};
