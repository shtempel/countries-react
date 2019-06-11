import { CountryResponse } from '../../services/typings';

export const emptyCountry: CountryResponse = {
    'name': '',
    'topLevelDomain': [],
    'alpha2Code': '',
    'alpha3Code': '',
    'callingCodes': [],
    'capital': '',
    'altSpellings': [],
    'region': '',
    'subregion': '',
    'population': 0,
    'latlng': [],
    'demonym': '',
    'area': 0,
    'gini': null,
    'timezones': [],
    'borders': [],
    'nativeName': '',
    'numericCode': '',
    'currencies': [
        {
            'code': '',
            'name': '',
            'symbol': ''
        }
    ],
    'languages': [
        {
            'iso639_1': '',
            'iso639_2': '',
            'name': '',
            'nativeName': ''
        },
        {
            'iso639_1': '',
            'iso639_2': '',
            'name': '',
            'nativeName': ''
        }
    ],
    'translations': {
        'de': '',
        'es': '',
        'fr': '',
        'ja': '',
        'it': '',
        'br': '',
        'pt': '',
        'nl': '',
        'hr': '',
        'fa': ''
    },
    'flag': '',
    'regionalBlocs': [],
    'cioc': ''
};
