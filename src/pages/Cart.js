import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQty } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import PageBanner from "../components/PageBanner";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const parsePrice = (val) =>
    parseFloat(val?.toString().replace(/[^0-9.]/g, '') || 0);

  const handleQtyChange = (product, type) => {
    const { id, qty } = product;
    if (type === 'inc') {
      dispatch(updateQty({ id, qty: qty + 1 }));
    } else if (qty > 1) {
      dispatch(updateQty({ id, qty: qty - 1 }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const subtotal = cartItems.reduce((acc, item) => {
    return acc + parsePrice(item.sale || item.price) * item.qty;
  }, 0);

  return (
    <>
    <PageBanner title="My Cart" />
    <section className="cart_sec p_80">
      <div className="container">
        <div className="row gy-4">
          {/* Cart Content */}
          <div className="col-lg-8">
            
            {cartItems.length === 0 ? (
              <div className="text-left py-5">
                {/* <img
                  src="/images/empty-cart.png"
                  alt="Empty cart"
                  style={{ width: '150px' }}
                  className="mb-3"
                /> */}
                <h4>Your cart is empty</h4>
                <p className="text-muted">Looks like you haven't added anything yet.</p>
                <Link to="/shop" className="btn btn-primary mt-3">
                  Continue Shopping
                </Link>
              </div>
            ) : (
             <div className='cart_main_box'><h2>Shopping Cart</h2>
              {
                cartItems.map((item) => (
                
                <div
                  key={item.id}
                  className="d-flex align-items-center justify-content-between cart_pro_box"
                >
                    <img src={item.image} alt={item.name} width="80" />
                    <div>
                      <h5>{item.name}</h5>
                      <div className="cart_control d-flex align-items-center">
                        <button
                          type="button"
                          onClick={() => handleQtyChange(item, 'dec')}
                          className="btn btn-sm btn-outline-secondary"
                        >
                          -
                        </button>
                        <span>{item.qty}</span>
                        <button
                          type="button"
                          onClick={() => handleQtyChange(item, 'inc')}
                          className="btn btn-sm btn-outline-secondary"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  
                 
                    <p className="mb-0 fw-bold">
                      ${parsePrice(item.sale || item.price).toFixed(2)}
                    </p>
                    <button
                      type="button"
                      onClick={() => handleRemove(item.id)}
                      className="btn"
                      aria-label="Remove item"
                    >
                      <img src='images/cart_box_icon.svg' alt='svg cart icon'/>
                    </button>
                  
                </div>
              ))
              }
              </div>
            )}
          </div>

          {/* Order Summary */}
          {cartItems.length > 0 && (
            <div className="col-lg-4">
              <div className="cart_summary_box">
                <h4>Order Summary</h4>
                <div className="d-flex sub_total_box">
                  <p>Subtotal</p>
                  <span className="fw-bold">${subtotal.toFixed(2)}</span>
                </div>
                <p className="sub_total_box_text">
                  By continuing to checkout, you agree to our Terms of Use and Privacy Policy.
                </p>
                <Link to="/checkout" className="cart_summary_box_btn">
                  Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
    </>
  );
};

export default Cart;