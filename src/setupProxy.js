const proxy = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(proxy("/Api", { target: "http://xkd.lethink.net/", "changeOrigin": true }));
};
