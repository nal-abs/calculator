import CalcFunctions from '../services/CalcFunctions';

const setNumber = (context) => ({
	number: CalcFunctions.getNumber(context),
	result: CalcFunctions.calculation(context),
});

const setOperator = (context) => ({
	operator: context.data,
	number: 0,
});

const actions = {
	setNumber,
	setOperator,
	// updateResult,
};

export default actions;
