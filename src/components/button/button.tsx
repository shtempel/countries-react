import React, { FC } from 'react';
import cn from 'classnames';

import './button.scss';

type ButtonType = 'button' | 'reset' | 'submit';

interface ButtonProps {
    className?: string;
    name?: string;
    onClick?: any;
    value?: string;
    type: ButtonType;
    disabledCondition?: boolean;
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <button { ...props }
                disabled={ props.disabledCondition }
                className={
                    cn(`button active-button ${ props.className }`, { 'disabled-button': props.disabledCondition })
                }>
            { props.name }
        </button>
    );
};
