import axios from 'axios';

import { CountryResponse } from './typings';

const BASE_URL = 'https://restcountries.eu/rest/v2';

export class CountriesService {

    getCountries(query: string) {
        return axios.get<CountryResponse[]>(`${ BASE_URL }/${ query }`)
            .then(response => response.data);
    }
}

const service = new CountriesService();

export default service;
