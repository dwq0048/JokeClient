module.exports = {
	lintOnSave: false,
	css: {
		loaderOptions: {
			scss: {
				prependData: `@import "~@/assets/css/variables.scss";`
			}
		}
	},
	publicPath: '',
	pluginOptions: {
		cordovaPath: 'src-cordova'
	}
}
