import React, { FC } from 'react';

import { Translation } from '../../../services/typings';
import { PairedLabel } from '../paired-label/paired-label';

interface TranslationsProps {
    translations: Translation;
}

export const Translations: FC<TranslationsProps> = (props: TranslationsProps) => {
    const { translations } = props;
    return (
        <div className='column'>
            <PairedLabel leftContent='de' rightContent={ translations.de }/>
            <PairedLabel leftContent='es' rightContent={ translations.es }/>
            <PairedLabel leftContent='fr' rightContent={ translations.fr }/>
            <PairedLabel leftContent='it' rightContent={ translations.it }/>
            <PairedLabel leftContent='br' rightContent={ translations.br }/>
            <PairedLabel leftContent='pt' rightContent={ translations.pt }/>
            <PairedLabel leftContent='nl' rightContent={ translations.nl }/>
            <PairedLabel leftContent='hr' rightContent={ translations.hr }/>
            <PairedLabel leftContent='fa' rightContent={ translations.fa }/>
        </div>
    );
};
