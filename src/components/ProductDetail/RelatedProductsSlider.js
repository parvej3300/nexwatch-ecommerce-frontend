import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import products from "../../data/products";

const RelatedProductsSlider = ({ currentProductId, brandName }) => {
  const dispatch = useDispatch();

  const related = products.filter(
    (p) => p.brand.name === brandName && p.id !== currentProductId
  );

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 600,
    centerMode: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  const formatPrice = (value) => {
    if (!value) return "$0";
    return `$${parseFloat(value.replace(/[^\d.]/g, "")).toFixed(2)}`;
  };

  return (
    <section className="related_products mt-5">
      <h2 className="com_title">Related Products</h2>
      <h3 className="com_sub_title">Handpicked timepieces that define sophistication and style.</h3>
      <Slider {...settings} className="trending_slider slide_1">
        {related.map((product) => (
          <div key={product.id}>
            <div className="pro_main_box">
              <div className="img-box position-relative">
                <img
                  src={product.image}
                  className="img-fluid"
                  alt={product.name}
                />
                <div className="offer_badge">
                  <p>New</p>
                </div>
                <div className="cta_container d-flex">
                  <Link to={`/product/${product.id}`}>BUY NOW</Link>
                  <button
                    className="btn btn-sm btn-outline-dark"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="content_box">
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <div className="price_box d-flex justify-content-between align-items-center">
                  <p>
                    {formatPrice(product.sale)}
                    <span className="ms-2 text-muted text-decoration-line-through">
                      {formatPrice(product.price)}
                    </span>
                  </p>
                  <div className="d-flex align-items-center gap-1">
                    <span>{product.rating}</span>
                    <img
                      src="/images/star.svg"
                      className="img-fluid"
                      alt="star"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default RelatedProductsSlider;
