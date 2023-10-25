import CalcFunctions from '../services/CalcFunctions';

const setNumber = (context) => ({
	number: CalcFunctions.getNumber(context),
});

const setOperator = (context) => ({
	operator: context.data.operation,
	result: CalcFunctions.calculation(context),
	number: 0,
});

const actions = {
	setNumber,
	setOperator,
};

export default actions;
