import axios from "axios";
// const API = axios.create({
//   baseURL: "http://multiplexurbangreen.herokuapp.com",
// });
const API = axios;

API.interceptors.request.use((req) => {
  const cookie = document.cookie.replace(
    /(?:(?:^|.*;\s*)ug-token\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  if (cookie) {
    req.headers.Authorization = cookie;
  }
  return req;
});

// Admin Signin
export const adminSignin = (formValues) =>
  API.post("/admin/signin", formValues);

// Users
export const signin = (formValues) => API.post("/users/signin", formValues);
export const signup = (formValues) => API.post("/users/signup", formValues);
export const loginAttempts = (formValues) =>
  API.post("/users/loginAttempt", formValues);
export const fetchLogins = () => API.get("/users/loginAttempt");
export const fetchUser = (id) => API.get(`/users/${id}`);
export const updateUserInfo = (id, values) => API.patch(`/users/${id}`, values);
export const sendForgotEmail = (emailId) =>
  API.post(`/users/sendMail`, emailId);
export const resetPassword = (email, formValues) =>
  API.patch(`/users/password/${email}`, formValues);
export const fetchUsers = () => API.get(`/users/`);

// Products
export const createProduct = (postValues) => API.post("/products", postValues);
export const fetchProducts = () => API.get("/products");
export const fetchBestDeals = () =>
  API.get("/products/display?name=OnlyForYou");
export const fetchDailyDeals = () =>
  API.get("/products/display?name=BestDeals");
export const fetchPottingSoil = () =>
  API.get("/products/category?name=PottingSoil");
export const fetchPlantHealth = () =>
  API.get("/products/category?name=PlantHealth");
export const fetchSeeds = () => API.get("/products/category?name=Seeds");
export const fetchAccessories = () =>
  API.get("/products/category?name=Accessories");
export const fetchFourProducts = () => API.get("/products/limited");
export const fetchSingleProduct = (id) => API.get(`/products/${id}`);
export const updateProducts = (id, values) =>
  API.patch(`/products/${id}`, values);
export const deleteProduct = (id) => API.delete(`/products/${id}`);

// SendMail and Subscription
export const sendEmail = (emailId) => API.post(`/subscribe/sendMail`, emailId);
export const fetchSubscribers = () => API.get("/subscribe");
export const deleteSubscriber = (id) => API.delete(`/subscribe/${id}`);

// Blogs
export const createBlogs = (postValues) => API.post("/blogs/", postValues);
export const fetchBlogs = () => API.get("/blogs");
export const fetchThreeBlogs = () => API.get("/blogs/three");
export const fetchSingleBlog = (id) => API.get(`/blogs/${id}`);
export const updateBlog = (id, values) => API.patch(`/blogs/${id}`, values);
export const deleteBlog = (id) => API.delete(`/blogs/${id}`);

// Comments
export const postComment = (postValues) => API.post("/reviews/", postValues);
export const fetchProductComments = (id) =>
  API.get(`/reviews/product?id=${id}`);
export const fetchAllComments = () => API.get(`/reviews/`);
export const deleteComment = (id) => API.delete(`/reviews/${id}`);
export const updateComment = (id, values) =>
  API.patch(`/reviews/${id}`, values);

// Services
export const createServices = (postValues) =>
  API.post("/services-data/", postValues);
export const fetchServices = () => API.get("/services-data");
export const fetchSingleService = (id) => API.get(`/services-data/${id}`);
export const updateServices = (id, values) =>
  API.patch(`/services-data/${id}`, values);
export const deleteService = (id) => API.delete(`/services-data/${id}`);

// Services Form
export const createServicesForm = (postValues) =>
  API.post("/servicesForm/", postValues);
export const fetchServicesForm = () => API.get("/servicesForm");
export const deleteServiceForm = (id) => API.delete(`/servicesForm/${id}`);

// Orders
export const createOrder = (postValues) => API.post("/orders/", postValues);
export const fetchOrders = () => API.get("/orders/");
export const fetchSingleOrder = (id) => API.get(`/orders/${id}`);
export const updateOrder = (id, values) => API.patch(`/orders/${id}`, values);
export const fetchUserOrder = (id) => API.get(`/orders/user/${id}`);

// Address
export const createAddress = (postValues) => API.post("/address/", postValues);
export const fetchAddressById = (id) => API.get(`/address/user/${id}`);

// Razorpay
export const payments = () => API.post("/razorpay/payment");

// Collaborations
export const createCollaboration = (postValues) =>
  API.post("/collaboration/", postValues);
export const fetchCollaboration = () => API.get("/collaboration/");
export const deleteCollaboration = (id) => API.delete(`/collaboration/${id}`);
export const updateCollaborations = (id, values) =>
  API.patch(`/collaboration/${id}`, values);

// Store Banner
export const createStoreBanner = (postValues) =>
  API.post("/storeBanner/", postValues);
export const fetchStoreBanner = () => API.get("/storeBanner/");
export const deleteStoreBanner = (id) => API.delete(`/storeBanner/${id}`);
export const fetchOfferBanners = () =>
  API.get("/storeBanner/category?name=OffersPage");
export const fetchStoreBanners = () =>
  API.get("/storeBanner/category?name=StorePage");

// Visitors
export const fetchVisitors = () => API.get("/visitor/");
export const AddVisitors = () => API.post("/visitor/");

// Heading
export const createHeading = (postValues) => API.post("/headings/", postValues);
export const fetchHeadings = () => API.get("/headings/");
export const updateHeading = (id, values) =>
  API.patch(`/headings/${id}`, values);
export const deleteHeading = (id) => API.delete(`/headings/${id}`);
