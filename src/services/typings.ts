export interface CountryResponse {
    name: string;
    capital: string;
    altSpellings: string[];
    region: string;
    subregion: string;
    translations: Translations;
    population: number;
    latlng: number[];
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    demonym: string;
    area: number;
    gini: number | null;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode: string;
    currencies: Currency[];
    languages: Language[];
    flag: string;
    regionalBlocs: RegionBlock[];
    cioc: string;
}

interface Translations {
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
}

interface Currency {
    code: string;
    name: string;
    symbol: string;
}

interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

interface RegionBlock {
    acronym: string;
    name: string;
    otherAcronyms: string[];
    otherNames: string[];
}

export const countryExample: CountryResponse = {
    "name": "Aruba",
    "topLevelDomain": [
        ".aw"
    ],
    "alpha2Code": "AW",
    "alpha3Code": "ABW",
    "callingCodes": [
        "297"
    ],
    "capital": "Oranjestad",
    "altSpellings": [
        "AW"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 107394,
    "latlng": [
        12.5,
        -69.96666666
    ],
    "demonym": "Aruban",
    "area": 180,
    "gini": null,
    "timezones": [
        "UTC-04:00"
    ],
    "borders": [],
    "nativeName": "Aruba",
    "numericCode": "533",
    "currencies": [
        {
            "code": "AWG",
            "name": "Aruban florin",
            "symbol": "ƒ"
        }
    ],
    "languages": [
        {
            "iso639_1": "nl",
            "iso639_2": "nld",
            "name": "Dutch",
            "nativeName": "Nederlands"
        },
        {
            "iso639_1": "pa",
            "iso639_2": "pan",
            "name": "(Eastern) Punjabi",
            "nativeName": "ਪੰਜਾਬੀ"
        }
    ],
    "translations": {
        "de": "Aruba",
        "es": "Aruba",
        "fr": "Aruba",
        "ja": "アルバ",
        "it": "Aruba",
        "br": "Aruba",
        "pt": "Aruba",
        "nl": "Aruba",
        "hr": "Aruba",
        "fa": "آروبا"
    },
    "flag": "https://restcountries.eu/data/abw.svg",
    "regionalBlocs": [],
    "cioc": "ARU"
}

