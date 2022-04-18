import CalcFunctions from './CalcFunctions.js';

const MathFunction = {

	add: (context) => (context.state.result - context.state.number)
	+ CalcFunctions.getNumber(context),

	subtract: (context) => (context.state.result
	+ context.state.number) - CalcFunctions.getNumber(context),

	multiply: (context) =>
		context.state.result * CalcFunctions.getNumber(context),

	division: (context) =>
		context.state.result / CalcFunctions.getNumber(context),

};

export default MathFunction;
