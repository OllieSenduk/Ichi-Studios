const path = require('path');

function addStyleResource(rule) {
	rule.use('style-resource').loader('style-resources-loader').options({
		patterns: [ path.resolve(__dirname, './src/assets/styles/main.scss') ]
	});
}


module.exports = {
	siteName: 'Ichi Studios',
	siteDescription: 'A starter project for Gridsome with Bootstrap and some other useful tools.',
	siteUrl: 'https://www.ichistudios.com',
	chainWebpack: (config) => {
		const types = [ 'vue-modules', 'vue', 'normal-modules', 'normal' ];
		types.forEach((type) => addStyleResource(config.module.rule('scss').oneOf(type)));
	},
	plugins: [
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'blog/**/*.md',
				typeName: 'BlogPost',
				resolveAbsolutePaths: true,
				remark: {
					externalLinksTarget: '_blank',
					externalLinksRel: [ 'nofollow', 'noopener', 'noreferrer' ]
				}
			}
		},
		{
			use: '@gridsome/plugin-google-analytics',
			options: {
				id: 'UA-72659574-10'
			}
		},
		{
			use: '@gridsome/plugin-sitemap',
			options: {
				cacheTime: 600000
			}
		}
	],
	css: {
		loaderOptions: {
			scss: {}
		}
	},
	devServer: {
		host: '0.0.0.0',
		port: 8080
	}
};
