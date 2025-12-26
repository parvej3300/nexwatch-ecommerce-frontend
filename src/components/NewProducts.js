import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { addToCart } from '../redux/cartSlice';
import products from '../data/products';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NewProducts = () => {
  const dispatch = useDispatch();
  const newProducts = products.slice(-6); // latest 6 products

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="trending_sec p_80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="com_title">New Products</h2>
            <h3 className="com_sub_title">
              Handpicked timepieces that define sophistication and style.
            </h3>
            <Slider {...sliderSettings} className="trending_slider slide_3">
              {newProducts.map((product) => (
                <div className="pro_main_box" key={product.id}>
                  <div className="img-box position-relative">
                    <img src={product.image} className="img-fluid" alt={product.name} />
                    <div className="offer_badge"><p>New</p></div>
                    <div className="cta_container d-flex">
                      <Link to={`/product/${product.id}`}>BUY NOW</Link>
                      <button
                        className="btn btn-sm btn-outline-dark mt-1"
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
                      <p>{product.price} <span>{product.sale}</span></p>
                      <div className="d-flex align-items-center gap-1">
                        <span>{product.rating}</span>
                        <img src="/images/star.svg" className="img-fluid" alt="star" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewProducts;