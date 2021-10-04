const {alias, aliasJest, configPaths} = require('react-app-rewire-alias');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

const aliasPaths = configPaths('./tsconfig.paths.json')

const override = (config, env) => {
    config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));
    return alias(configPaths('./tsconfig.paths.json'))(config);
};
module.exports = override;
module.exports.jest = aliasJest(aliasPaths)
