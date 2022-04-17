import CalcFunctions from '../services/CalcFunctions';

const display = (context) => ({
	number: CalcFunctions.number(context),
	result: CalcFunctions.number(context),
});
const displayString = (context) => ({
	operator: CalcFunctions.key(context),
});

const actions = {
	display,
	displayString,
};

export default actions;
