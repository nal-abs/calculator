import { React } from 'react';
import PositionService from '../services/PositionService';
import { map } from '@laufire/utils/collection';
import InputButton from './InputButton';

const Rows = (context) => {
	const { config: { buttons }} = context;
	const style = { width: `${ PositionService.buttonPosition(context) }vMin` };

	return (
		<div style={ style } className="row">
			{ map(buttons, ({ categories, action }) =>
				map(categories, (category, i) =>
					<InputButton
						key={ i }
						{ ...{
							...context,
							data: { category, action },
						} }
					/>)) }
		</div>
	);
};

export default Rows;
