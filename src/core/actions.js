import CalcFunctions from '../services/CalcFunctions';

const setNumber = (context) => ({
	number: CalcFunctions.getNumber(context),
});

const setOperator = (context) => ({
	operator: context.data,
	result: CalcFunctions.calculation(context),
	number: 0,
});

const actions = {
	setNumber,
	setOperator,
	// updateResult,
};

export default actions;
