import React, { FC } from 'react';
import { connect } from 'react-redux';

import { countryExample, CountryResponse } from '../../services/typings';
import { selectCountry } from '../../store/countries/selectors';
import { AppState } from '../../store/typings';
import { PairedLabel } from './paired-label/paired-label';

import './detailed-page.scss';

interface DetailedPageProps {
    country: CountryResponse;
}

const mapStateToProps = (state: AppState) => ({
    country: selectCountry(state)
});

export const DetailedPage: FC<DetailedPageProps> = (props: DetailedPageProps) => {
    const { country } = props;

    return (
        <div className='detailed-page'>
            <img className='flag' src={ countryExample.flag } alt={ countryExample.name }/>
            <div className='header'>
                <span className='name'>{ countryExample.name }</span>
            </div>
            <div className='common-info'>
                <div className='info-row'>
                    <PairedLabel leftContent='country.region' rightContent={ countryExample.region }/>
                    <PairedLabel leftContent='country.capital' rightContent={ countryExample.capital }/>
                </div>
            </div>
        </div>
    );
};

export default connect(
    mapStateToProps,
    null
)(DetailedPage);
