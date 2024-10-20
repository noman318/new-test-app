import React from "react";
import ReactDOM from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.min.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import AdminRoute from "./components/AdminRoute";
import PrivateRoute from "./components/PrivateRoute";
import reportWebVitals from "./reportWebVitals";
import AboutUsScreen from "./screens/AboutUsScreen";
import ActivityScreen from "./screens/ActivityScreen";
import AddProductScreen from "./screens/admin/AddProductScreen";
import OrderListScreen from "./screens/admin/OrderListScreen";
import PaymentPolicy from "./screens/admin/PaymentPolicy";
import ProductEditScreen from "./screens/admin/ProductEditScreen";
import ProductListScreen from "./screens/admin/ProductListScreen";
import UserEditScreen from "./screens/admin/UserEditScreen";
import UserListScreen from "./screens/admin/UserListScreen";
import AllGirlsTrips from "./screens/AllGirlsTrips";
import CareerWithUs from "./screens/CareerWithUs";
import CartScreen from "./screens/CartScreen";
import ContactUsScreen from "./screens/ContactUsScreen";
import CorporateProgram from "./screens/CorporateProgram";
import DestinationScreen from "./screens/DestinationScreen";
import ForgotPassword from "./screens/ForgotPassword";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import NotFoundPage from "./screens/NotFoundPage";
import OrderScreen from "./screens/OrderScreen";
import PackageDetailPage from "./screens/PackageDetailPage";
import PaymentScreen from "./screens/PaymentScreent";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ResetPassword from "./screens/ResetPassword";
import ShippingScreen from "./screens/ShippingScreen";
import ThemeScreen from "./screens/ThemeScreen";
import store from "./store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="*" element={<NotFoundPage />} /> {/* Catch-all for 404 */}
      <Route path="/search/:keyword" element={<HomeScreen />} />
      <Route path="/page/:pageNumber" element={<HomeScreen />} />
      <Route
        path="/search/:keyword/page/:pageNumber"
        element={<HomeScreen />}
      />
      <Route path="/payment" element={<PaymentPolicy />} />
      <Route path="/package/:id" element={<PackageDetailPage />} />
      <Route path="/order/:id" element={<OrderScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/category/:keyword" element={<AllGirlsTrips />} />
      <Route path="/category/corporate" element={<CorporateProgram />} />
      <Route path="/destination/leh-ladakh" element={<DestinationScreen />} />
      <Route path="/activities/bungee-jumping" element={<ActivityScreen />} />
      <Route
        path="/trips-and-tricks/kedar-kantha"
        element={<ActivityScreen />}
      />
      <Route path="/themes/ladakh-tour-package" element={<ThemeScreen />} />
      <Route path="/contact" element={<ContactUsScreen />} />
      <Route path="/career" element={<CareerWithUs />} />
      <Route path="/about" element={<AboutUsScreen />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Route>
      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/bookings" element={<OrderListScreen />} />
        <Route path="/admin/packages" element={<ProductListScreen />} />
        <Route
          path="/admin/packages/:pageNumber"
          element={<ProductListScreen />}
        />
        <Route path="/admin/package/add" element={<AddProductScreen />} />
        {/* <Route path="/admin/packages/add" element={<AddProductScreen />} /> */}
        <Route path="/admin/users" element={<UserListScreen />} />
        <Route path="/admin/package/:id/edit" element={<ProductEditScreen />} />
        <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PayPalScriptProvider deferLoading={true}>
          <RouterProvider router={router} />
        </PayPalScriptProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
