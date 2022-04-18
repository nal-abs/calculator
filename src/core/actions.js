import CalcFunctions from '../services/CalcFunctions';

const display = (context) => ({
	number: CalcFunctions.getNumber(context),
	result: CalcFunctions.calculation(context),
});
const displayString = (context) => ({
	operator: CalcFunctions.getOperator(context),
	number: 0,
});

const actions = {
	display,
	displayString,
};

export default actions;
