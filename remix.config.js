/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    publicPath: "/_static/build/",
    serverBuildPath: "server/cojon/index.js",
    serverMainFields: ["main", "module"], // default value, can be removed
    serverMinify: false, // default value, can be removed
    serverModuleFormat: "cjs", // default value in 1.x, add before upgrading
    serverPlatform: "node", // default value, can be removed
  };