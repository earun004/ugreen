const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/AdminRoutes.js");
const userRoutes = require("./routes/UserRoutes.js");
const subscribersRoutes = require("./routes/SubscribersRoutes.js");
const productRoutes = require("./routes/ProductRoutes.js");
const blogRoutes = require("./routes/BlogsRoutes.js");
const reviewRoutes = require("./routes/reviewRoutes.js");
const servicesRoutes = require("./routes/ServicesRoutes.js");
const servicesFormRoutes = require("./routes/ServicesFormRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");
const addressRoutes = require("./routes/AddressRoutes.js");
const razorpayRoutes = require("./routes/RazorRoutes.js");
const collaborationRoutes = require("./routes/CollaborationRoutes.js");
const storeBannerRoutes = require("./routes/StoreBannerRoutes.js");
const visitorRoutes = require("./routes/VisitorRoutes.js");
const uploads = require("./routes/uploadImages");
const headingRoutes = require("./routes/HeadingRoutes.js");
const cookieParser = require("cookie-parser");

dotenv.config({ path: "./config/config.env" });
const app = express();

// Middleware section
app.use(cors());
app.use(morgan("combined"));
app.use(cookieParser());

const fileUpload = require("express-fileupload");
app.use(fileUpload());
app.use(
  bodyParser.json({
    limit: "4mb",
    extended: true,
  })
);
app.use(bodyParser.urlencoded({ limit: "4mb", extended: true }));

mongoose.connect(process.env.MONGODB_URL);

app.use("/admin", adminRoutes);
app.use("/users", userRoutes);
app.use("/subscribe", subscribersRoutes);
app.use("/products", productRoutes);
app.use("/blogs", blogRoutes);
app.use("/reviews", reviewRoutes);
app.use("/services-data", servicesRoutes);
app.use("/servicesForm", servicesFormRoutes);
app.use("/orders", orderRoutes);
app.use("/address", addressRoutes);
app.use("/razorpay", razorpayRoutes);
app.use("/collaboration", collaborationRoutes);
app.use("/storeBanner", storeBannerRoutes);
app.use("/visitor", visitorRoutes);
app.use("/upload", uploads);
app.use("/headings", headingRoutes);

app.use(express.static(__dirname + "/client"));
if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // lik our main.js file or main.css file
  app.use(express.static("client/build"));
  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Successfully started on port ${PORT}`);
});
