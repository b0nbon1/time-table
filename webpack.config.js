const { merge } = require('webpack-merge');

const modeConfiguration = (env) => require(`./config/webpack/webpack.${env}`);
const commonConfig = require('./config/webpack/webpack.common');

module.exports = ({ mode } = { mode: 'production' }) => {
	console.log(`mode is: ${mode}`);

	return merge(commonConfig, modeConfiguration(mode));
};
