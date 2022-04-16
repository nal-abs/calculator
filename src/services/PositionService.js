const PositionService = {
	buttonPosition: (context) => {
		const { config: { button }} = context;

		return button.noOfElementsInRow * button.width;
	},

};

export default PositionService;
