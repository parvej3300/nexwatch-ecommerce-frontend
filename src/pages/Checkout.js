import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/cartSlice';
import PageBanner from "../components/PageBanner";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [coupon, setCoupon] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    postalCode: '',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
  });

  const [errors, setErrors] = useState({});

  const cleanPrice = (val) => parseFloat(val?.toString().replace(/[^0-9.]/g, '') || 0);

  const subtotal = cartItems.reduce((total, item) => {
    const price = cleanPrice(item.sale || item.price);
    return total + price * item.qty;
  }, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const validateForm = () => {
    const requiredFields = ['firstName', 'lastName', 'phone', 'email', 'address', 'city', 'state', 'postalCode'];
    if (paymentMethod === 'card') {
      requiredFields.push('cardNumber', 'cardName', 'expiry', 'cvv');
    }

    const newErrors = {};
    requiredFields.forEach((field) => {
      if (!formData[field]) newErrors[field] = true;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckout = () => {
    if (!validateForm()) return;

    const orderId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    dispatch(clearCart());
    navigate(`/thank-you?orderId=${orderId}`);
  };

  return (
    <>
    <PageBanner title="Checkout" />
      <section className="checkout_sec">
        <div className="container">
          <div className="row">
            {/* Billing Form */}
            <div className="col-md-7">
              <h4>Billing Details</h4>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">First Name</label>
                  <input
                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Last Name</label>
                  <input
                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone</label>
                  <input
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-12">
                  <label className="form-label">Address</label>
                  <input
                    className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                    placeholder="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Apartment</label>
                  <input
                    className="form-control"
                    placeholder="Apartment (optional)"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">City</label>
                  <input
                    className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                    placeholder="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">State</label>
                  <input
                    className={`form-control ${errors.state ? 'is-invalid' : ''}`}
                    placeholder="State"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Postal Code</label>
                  <input
                    className={`form-control ${errors.postalCode ? 'is-invalid' : ''}`}
                    placeholder="Postal Code"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="mt-4">
                <h4>Payment Method</h4>
                <div className="form-check cod">
                  <input
                    type="radio"
                    name="payment"
                    id="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                  />
                  <label htmlFor="cod" className="form-check-label">Cash on delivery</label>
                </div>
                <div className="form-check card_checkout">
                  <input
                    type="radio"
                    name="payment"
                    id="card"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                  />
                  <label htmlFor="card" className="form-check-label">Card</label>
                </div>

                {paymentMethod === 'card' && (
                  <div className="mt-3 row g-3">
                    <div className="col-md-12">
                      <label className="form-label">Card Number</label>
                      <input
                        className={`form-control ${errors.cardNumber ? 'is-invalid' : ''}`}
                        placeholder="Card Number"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="form-label">Name on Card</label>
                      <input
                        className={`form-control ${errors.cardName ? 'is-invalid' : ''}`}
                        placeholder="Name on Card"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">MM/YY</label>
                      <input
                        className={`form-control ${errors.expiry ? 'is-invalid' : ''}`}
                        placeholder="MM/YY"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">CVV</label>
                      <input
                        className={`form-control ${errors.cvv ? 'is-invalid' : ''}`}
                        placeholder="CVV"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Cart Summary */}
            <div className="col-md-5">
              <h4>Your Order</h4>
              <div className="cart_main_box">
                {cartItems.map(item => (
                  <div key={item.id} className="cart_box">
                      <img src={item.image} alt={item.name} style={{ width: '60px' }} />
                      <div>
                        <p className="mb-0">{item.name}</p>
                        <small>Qty: {item.qty}</small>
                      </div>
                    <p className="mb-0 fw-bold">${(cleanPrice(item.sale || item.price) * item.qty).toFixed(2)}</p>
                  </div>
                ))}

                {/* Coupon */}
                <div className="input-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Coupon Code"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                  />
                  <button className="btn btn-primary">Apply</button>
                </div>

                {/* Subtotal */}
                <div className="checkout_sub_total">
                  <p>Subtotal <span>${subtotal.toFixed(2)}</span></p>
                </div>

                {/* Checkout Button */}
                <button className="checkout_btn" onClick={handleCheckout}>
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;