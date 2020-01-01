module.exports = function(api) {
	api.loadSource(({ addContentType }) => {
		// Use the Data Store API here: https://gridsome.org/docs/data-store-api
	});

	api.createPages(({ createPage }) => {
		createPage({
			path: '/cases/:identifier',
			component: './src/templates/Case.vue'
		});
	});
};
