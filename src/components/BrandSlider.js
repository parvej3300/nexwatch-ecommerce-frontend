import Slider from 'react-slick';
import products from '../data/products';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BrandSlider () {
  
  const uniqueBrands = new Map();

  products.forEach(product => {
    const brandName = product.brand.name;
    if (!uniqueBrands.has(brandName)) {
      uniqueBrands.set(brandName, {
        name: brandName,
        logo: product.brand.logo
      });
    }
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="trending_sec p_80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="com_title">Shop by Brands</h2>
            <h3 className="com_sub_title">
              Discover top picks tailored to your style and needs.
            </h3>
            <Slider {...settings} className="trending_slider">
            
              {[...uniqueBrands.values()].map((brand, index) => (
                <div key={index} className="brand_logo_box text-center px-2">
                  <img src={brand.logo} alt={brand.name} className="img-fluid" />
                </div>
              ))}
            </Slider>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSlider;