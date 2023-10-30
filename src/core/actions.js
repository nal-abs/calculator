import CalcFunctions from '../services/CalcFunctions';

const setNumber = (context) => ({ number: CalcFunctions.getNumber(context) });

const setOperator = (context) => ({
	operator: context.data.operation,
	result: CalcFunctions.calculation(context),
	number: 0,
});
const playAudio = ({ state: { audioStatus }, data: audio }) => ({
	audioStatus: {
		...audioStatus,
		[audio]: 'playing',

	},

});

const actions = {
	setNumber,
	setOperator,
	playAudio,
};

export default actions;
