import CalcFunctions from '../services/CalcFunctions';

const display = (context) => ({
	number: CalcFunctions.number(context),
	operator: '',
});
const displayString = (context) => ({
	operator: CalcFunctions.key(context),
	result: CalcFunctions.operation(context),
	number: 0,
});

const actions = {
	display,
	displayString,
};

export default actions;
