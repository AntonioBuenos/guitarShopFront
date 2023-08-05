const PROXY_CONFIG = {
  context: [
    "/rest"
  ],
  target: "https://localhost:8643",
  pathRewrite: {
    "^/rest": "/guitarshop/rest"
  },
  secure: false,
  logLevel: "debug"
};
module.exports = PROXY_CONFIG;
