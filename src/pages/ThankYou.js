import { useLocation } from 'react-router-dom';

const ThankYou = () => {
  const query = new URLSearchParams(useLocation().search);
  const orderId = query.get('orderId');

  return (
    <div className="container p_80 text-center">
      <h2 className='mb-3 text-dark'>Thank you for your order!</h2>
      <p className='mb-3'>Your order ID is <strong className='text-dark'>{orderId}</strong>.</p>
      <p>We'll send you a confirmation email shortly.</p>
    </div>
  );
};

export default ThankYou;