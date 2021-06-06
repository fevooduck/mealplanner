module.exports = {
	lintOnSave: false,

	css: {
		loaderOptions: {
			sass: {
				prependData: `
					@import "@/styles/functions";
					@import "@/styles/colors";
					@import "@/styles/variables";
				`,
			},
		},
	},
};
