export default {
	methods: {
		currentPath: function(context) {
			return context.$root._route.path.substr(1);
		}
	}
};
