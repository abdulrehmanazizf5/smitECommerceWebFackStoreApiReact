import { useCart } from "../../contexts/cart";
import Navbar from "../../layout/navbar";
import "./index.css";
const index = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    quantity,
  }: any = useCart();
  return (
    <>
      <Navbar />
      <div className="cart-container">
        <div className="cart-title-quantity">
          <h1 className="cart-title">Your Cart Items</h1>
          <h1 className="cart-quantity">Total Quantity: {quantity}</h1>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="cart-empty">Cart is empty</p>
          ) : (
            cart.map(
              (item: any) =>
                item.quantity > 0 && (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-1">
                      <img src={item.image} alt={item.title} />
                      <div className="cart-item-price-quantity-buttons">
                        <div className="cart-item-price-quantity">
                          <p className="cart-item-price">Price: {item.price}</p>
                          <p className="cart-item-quantity">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                        <div className="cart-item-buttons">
                          <div className="cart-item-buttons-quantity">
                            <button
                              className="cart-item-increase"
                              onClick={() => increaseQuantity(item.id)}
                            >
                              +
                            </button>
                            <button
                              className="cart-item-decrease"
                              onClick={() => decreaseQuantity(item.id)}
                            >
                              -
                            </button>
                          </div>
                          <button
                            className="cart-item-remove"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="cart-item-2">
                      <p className="cart-item-title">{item.title}</p>
                      <p className="cart-item-category">
                        <b>Category: </b> {item.category}
                      </p>
                    </div>
                  </div>
                ),
            )
          )}
        </div>
      </div>
    </>
  );
};

export default index;
