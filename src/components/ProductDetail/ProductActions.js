import { useNavigate } from 'react-router-dom';

const ProductActions = ({ onAddToCart }) => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    onAddToCart();
    navigate('/checkout');
  };

  return (
    <div className="product_btn_grp">
      <button className="addtocartbtn" onClick={onAddToCart}>
        Add To Cart
      </button>
      <button className="buynowbtn" onClick={handleBuyNow}>
        Buy Now
      </button>
    </div>
  );
};

export default ProductActions;