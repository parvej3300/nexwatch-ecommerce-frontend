const ProductInfo = ({
  name,
  price,
  sale,
  discount,
  qty,
  setQty,
  description,
}) => {
  const getNumericPrice = (value) => {
    if (!value) return 0;
    return parseFloat(value.replace(/[^\d.]/g, ""));
  };

  const displayPrice = getNumericPrice(sale || price);
  const originalPrice = getNumericPrice(price);

  const handleIncrease = () => setQty((prev) => prev + 1);
  const handleDecrease = () => setQty((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="product_info">
     <h2>{name || "Unnamed Product"}</h2>

      <p className="price">
        {sale && (
          <span className="text-decoration-line-through me-1">
            ${originalPrice.toFixed(2)}
          </span>
        )}
        ${displayPrice.toFixed(2)}
        {sale && price && (
          <span className="cus_badge">
            {Math.round((1 - displayPrice / originalPrice) * 100)}% OFF
          </span>
        )}
      </p>

      {discount && <p className="text-success">{discount}% Off</p>}

      {description && <p className="product-desc mt-3">{description}</p>}

      <div className="filter_with_color">
        <h4>Color:</h4>
        <ul className="filter">
          <li className="purple active"></li>
          <li className="red"></li>
          <li className="black"></li>
        </ul>
      </div>

      <div className="qty_box">
        <button className="btn btn-outline-secondary" onClick={handleDecrease}>
          −
        </button>
        <span className="px-3">{qty}</span>
        <button className="btn btn-outline-secondary" onClick={handleIncrease}>
          +
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
