const getConfig = (configName = 'default') => { 
  let { config } = require(`./${configName}`) 
  return config;
};
export default getConfig;