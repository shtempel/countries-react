import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { FilterPill } from '..';

import './filters.scss';

interface FiltersProps {
    filterName: string;

    onClick(filter: string): void;
}

export const SearchFilterMap: { id: string, title: string }[] = [
    { id: 'all',         title: 'filters.allCountries' },
    { id: 'name',        title: 'filters.country' },
    { id: 'alpha',       title: 'filters.countryCode' },
    { id: 'callingcode', title: 'filters.callingCode' },
    { id: 'capital',     title: 'filters.capital' },
    { id: 'currency',    title: 'filters.currency' },
    { id: 'lang',        title: 'filters.language' },
    { id: 'region',      title: 'filters.region' },
    { id: 'subregion',   title: 'filters.subregion' }
];

export const Filters: FC<FiltersProps> = (props: FiltersProps) => {
    const { t } = useTranslation();

    return (
        <div className='filters'>
            {
                SearchFilterMap.map(
                    (filter: { id: string, title: string }) =>
                        <FilterPill onClick={ props.onClick }
                                    id={ filter.id }
                                    key={ filter.id }
                                    title={ t(filter.title) }
                                    isSelected={ props.filterName === filter.id }/>
                )
            }
        </div>
    );
};
