import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Toast from "./components/Toast";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import ProtectedRoute from "./pages/ProtectedRoute";
import OrderSummary from "./pages/OrderSummary";
import ThankYou from "./pages/ThankYou";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import "./index.css";

function App() {
  const [toast, setToast] = useState({show: false, message: ""});

  window.showToast = (msg) => {
    setToast({show: true, message: msg});
  }

  return (
    <>
      <Navbar/>
      <Toast
        message = {toast.message}
        show = {toast.show}
        onClose = {() => setToast({...toast, show: false})}
      />  
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/product/:id" element = {<ProductDetails/>} />
        <Route path = "/cart" element = {<Cart/>} />
        <Route path = "/login" element = {<Login/>} />
        <Route path = "/register" element = {<Register/>} />
        <Route path = "/thank-you" element = {<ThankYou/>} />
        <Route path = "/checkout" element = {
          <ProtectedRoute>
            <Checkout/>
          </ProtectedRoute>
        }
        />

        <Route path = "/order-summary" element = {
          <ProtectedRoute>
            <OrderSummary/>
          </ProtectedRoute>
        }
        />

        <Route path = "/profile" element = {
          <ProtectedRoute>
            <Profile/>
          </ProtectedRoute>
        }
        />

        <Route path = "/edit-profile" element = {
          <ProtectedRoute>
            <EditProfile/>
          </ProtectedRoute>
        }
        />
      </Routes>
    </>
  );
}

export default App;