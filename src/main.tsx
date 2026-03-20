import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/home";
import Product from "./pages/product";
import { CartProvider } from "./contexts/cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>,
);
