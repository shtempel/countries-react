import React, { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { CountryResponse, Currency, Language } from '../../services/typings';
import { selectCountry } from '../../store/countries/selectors';
import { AppState } from '../../store/typings';
import { PairedLabel } from './paired-label/paired-label';
import { Translations } from './translations/translations';
import { Toggle } from '../../components';

import './detailed-page.scss';

const DetailedPage: FC = () => {
    const { t } = useTranslation();
    const country = useSelector<AppState, CountryResponse>(selectCountry);
    const languages: string[] = country.languages.map((language: Language) => language.name);
    const currencies: string[] = country.currencies.map((currency: Currency) => `${ currency.name } ${ currency.code } ${ currency.symbol }`);
    const translations: ReactNode = <Translations translations={ country.translations }/>;

    const listNode = (array: string[], title: string): ReactNode => {
        const node: ReactNode = (
            <div className='column'>
                { array.map((arrayItem, index) => <span key={ index }>{ arrayItem }</span>) }
            </div>
        );

        return (
            <div>
                <span className='bold'>{ t(`${ title }`) }&#58;&nbsp;</span>
                <Toggle child={ node } collapsedHeight='20px' isVisible={ array.length > 1 }/>
            </div>
        )
    };

    return (
        <div className='detailed-page'>
            <img className='flag' src={ country.flag } alt={ country.name }/>
            <div className='header'>
                <span className='name'>{ country.name }</span>
            </div>
            <div className='common-info'>
                <div className='info-row'>
                    <div className='column'>
                        <PairedLabel leftContent='country.region' rightContent={ country.region }/>
                        <PairedLabel leftContent='country.capital' rightContent={ country.capital }/>
                        <PairedLabel leftContent='country.subregion' rightContent={ country.subregion }/>
                        <PairedLabel leftContent='country.nativeName' rightContent={ country.nativeName }/>
                        { listNode(languages, 'country.languages') }
                        <div className='bold'>{ t('country.translations') }&#58;&nbsp;
                            <Toggle child={ translations } collapsedHeight='20px'/>
                        </div>
                        { listNode(country.borders, 'country.borders') }
                    </div>
                    <div className='column'>
                        <PairedLabel leftContent='country.population' rightContent={ country.population.toString() }/>
                        <PairedLabel leftContent='country.area' rightContent={ country.area.toString() }/>
                        <PairedLabel leftContent='country.numericCode' rightContent={ country.numericCode }/>
                        <PairedLabel leftContent='country.alpha2code' rightContent={ country.alpha2Code }/>
                        <PairedLabel leftContent='country.alpha3code' rightContent={ country.alpha3Code }/>
                        <PairedLabel leftContent='country.cioc' rightContent={ country.cioc }/>
                        { listNode(country.callingCodes, 'country.callingCodes') }
                        { listNode(country.timezones, 'country.timezones') }
                        { listNode(currencies, 'country.currencies') }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailedPage;
