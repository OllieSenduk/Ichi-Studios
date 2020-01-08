export default {
	methods: {
		currentPath: function(context) {
			const path = context.$root._route.path.substr(1)
			return path.endsWith('/') ? path.slice(0, -1) : path
		}
	}
};
