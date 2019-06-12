import React, { FC, ReactNode, useState } from 'react';
import cn from 'classnames';

import { Icon } from '..';

import './toggle.scss';

interface ToggleProps {
    child: ReactNode;
    collapsedHeight: string;
    isVisible?: boolean;
}

export const Toggle: FC<ToggleProps> = (props: ToggleProps) => {
    const { isVisible = true } = props;
    const [expanded, setExpanded] = useState(false);
    const iconType = expanded ? 'chevron-up' : 'chevron-down';
    const contentDivStyle = { height: props.collapsedHeight };

    const expand = () => setExpanded(!expanded);

    const icon: ReactNode = isVisible &&
        <Icon onIconClick={ expand }
              className='toggle-icon'
              iconPrefix='fa'
              icon={ iconType }
              size='small'/>;

    return (
        <div className='row '>
            <div className={ cn('content-hidden', { 'content-show': expanded }) }
                 style={ contentDivStyle }>
                { props.child }
                { icon }
            </div>
        </div>
    );
};
