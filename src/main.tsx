import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/home";
import Product from "./pages/product";
import Products from "./pages/products";
import { CartProvider } from "./contexts/cart";
import Cart from "./pages/cart";
import Login from "./pages/auth/login";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Slide}
    />
  </CartProvider>,
);
