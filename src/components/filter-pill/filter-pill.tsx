import React, { FC } from 'react';
import cn from 'classnames';

import './filter-pill.scss';

interface FilterPillProps {
	isSelected: boolean;
	title: string;
	id: string;

	onClick(id: any): void;
}

export const FilterPill: FC<FilterPillProps> = (props: FilterPillProps) =>
	<span id={ props.id }
		  onClick={ props.onClick }
		  className={ cn('filter-pill', { 'filter-pill__active': props.isSelected }) }>
		{ props.title }
	</span>;
