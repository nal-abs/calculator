const PositionService = {
	buttonPosition: (context) => {
		const { config: { button, noOfElementsInRow }} = context;

		return noOfElementsInRow * button.width;
	},

};

export default PositionService;
