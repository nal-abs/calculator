import CalcFunctions from '../services/CalcFunctions';

const display = (context) => ({
	number: CalcFunctions.getNumber(context),
	result: CalcFunctions.calculation(context),
});
const updateKeys = (context) => ({
	operator: CalcFunctions.getOperator(context),
	number: 0,
});

const updateResult = (context) => CalcFunctions.getKeys(context);

const actions = {
	display,
	updateKeys,
	updateResult,
};

export default actions;
