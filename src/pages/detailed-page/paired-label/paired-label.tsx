import React, { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import './paired-label.scss';

interface LabelProps {
    leftContent: string;
    leftClassName?: string;
    leftFontWeight?: 'lighter' | 'bold' | 'bolder' | 'normal';

    rightContent:  any;
    rightClassName?: string;
    rightFontWeight?: 'lighter' | 'bold' | 'bolder';

    isColon?: boolean;
    isSpace?: boolean;
}

export const PairedLabel: FC<LabelProps> = (props: LabelProps) => {
    const { t } = useTranslation();
    const {
        leftContent,
        rightContent,
        leftClassName,
        rightClassName,
        isColon = true,
        isSpace = true,
        leftFontWeight = 'bold',
        rightFontWeight = 'lighter',
    } = props;
    const colon: ReactNode = isColon && <>&#58;</>;
    const space: ReactNode = isSpace && <>&nbsp;</>;

    return (
        <div>
            <span className={ `${ leftClassName } ${ leftFontWeight }` }>{ t(leftContent) }{ colon }{ space }</span>
            <span className={ `${ rightClassName } ${ rightFontWeight }` }>{ t(rightContent) }</span>
        </div>
    )
};
