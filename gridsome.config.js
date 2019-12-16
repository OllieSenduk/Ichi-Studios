// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path');

function addStyleResource(rule) {
	rule.use('style-resource').loader('style-resources-loader').options({
		patterns: [ path.resolve(__dirname, './src/assets/scss/app.scss') ]
	});
}

module.exports = {
	// css: {
	//   loaderOptions: {
	//     scss: {
	//       // options here will be passed to sass-loader
	//     },
	//     less: {
	//       // options here will be passed to less-loader
	//     }
	//   }
	// },
	// chainWebpack: config => {
	//   config.module
	//     .rule('postcss')
	//     .oneOf('normal')
	//     .use('postcss-loader')
	//     .tap(options => {
	//       options.plugins.unshift(...[
	//         require('rucksack-css'),
	//       ])
	//       return options
	//     })
	// },

	chainWebpack: (config) => {
		const types = [ 'vue-modules', 'vue', 'normal-modules', 'normal' ];
		types.forEach((type) => addStyleResource(config.module.rule('scss').oneOf(type)));
	},
	siteUrl: 'https://www.ichistudios.com',
	plugins: []
};

// module.exports = {
//   chainWebpack: config => {
//     config.module
//       .rule('postcss')
//       .oneOf('normal')
//       .use('postcss-loader')
//       .tap(options => {
//         options.plugins.unshift(...[
//           require('rucksack-css'),
//         ])
//         return options
//       })
//   },
// }
