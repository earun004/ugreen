const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    [
      "/admin",
      "/users",
      "/products",
      "/subscribe",
      "/blogs",
      "/reviews",
      "/services",
      "/servicesForm/",
      "/orders/",
      "/address/",
      "/razorpay",
      "/collaboration/",
      "/storeBanner/",
      "/visitor/",
      "/upload",
      "/headings",
    ],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
