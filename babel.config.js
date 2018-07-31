"use strict";

module.exports = function(api) {
    const env = api.env();

    const config = {
        presets: [["@babel/preset-env", {
            "targets": {
              "node": "8"
            }
          }]]
    }

    return config;
}