import CalcFunctions from '../services/CalcFunctions';

const setNumber = (context) => ({
	number: CalcFunctions.getNumber(context),
	result: CalcFunctions.calculation(context),
});

const setOperator = (context) => ({
	operator: context.data,
	result: CalcFunctions.updateResult(context),
	number: 0,
});

const actions = {
	setNumber,
	setOperator,
	// updateResult,
};

export default actions;
