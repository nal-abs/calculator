const ten = 10;
const display = (context) => ({
	number: (context.state.number * ten) + context.data,
});

const actions = {
	display,
};

export default actions;
