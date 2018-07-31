
module.exports = function(api) {
  const env = api.env();
  
  const config = {
    presets: [
      [
        '@babel/preset-env', {
          targets: {
            node: 8
          }
        }
      ],
      '@babel/preset-react'
    ]
  };

  return config;
};
