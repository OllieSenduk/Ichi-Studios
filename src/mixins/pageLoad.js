export default {
	methods: {
		pageLoad: function(context) {
			setTimeout(
				function() {
					context.animationOn = false;
				}.bind(context),
				1700
			);
		}
	}
};
