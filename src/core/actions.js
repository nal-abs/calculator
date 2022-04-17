import CalcFunctions from '../services/CalcFunctions';

const display = (context) => ({
	number: CalcFunctions.number(context),
	operator: '',
});
const displayString = (context) => ({
	result: CalcFunctions.key(context),
	number: 0,
	operator: context.data,
});

const actions = {
	display,
	displayString,
};

export default actions;
