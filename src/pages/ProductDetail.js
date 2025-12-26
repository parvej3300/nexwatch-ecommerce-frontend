import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import products from "../data/products";

import ProductImageGallery from "../components/ProductDetail/ProductImageGallery";
import ProductInfo from "../components/ProductDetail/ProductInfo";
import ProductActions from "../components/ProductDetail/ProductActions";
import ProductTabs from "../components/ProductDetail/ProductTabs";
import ProductReviewSection from "../components/ProductDetail/ProductReviewSection";
import RelatedProductsSlider from "../components/ProductDetail/RelatedProductsSlider";
import PageBanner from "../components/PageBanner";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = products.find((p) => p.id.toString() === id);
  const [qty, setQty] = useState(1);

  if (!product) {
    return <p className="text-center py-5">Product not found</p>;
  }

  return (
    <>
      <PageBanner title={product.name} />

      <section className="product_detail py-5">
        <div className="container">
          <div className="row g-4">
            {/* Left: Gallery */}
            <div className="col-md-5">
              <ProductImageGallery
                mainImage={product.image}
                gallery={product.gallery || []}
              />
            </div>

            {/* Right: Info + Actions */}
            <div className="col-md-7">
              <div className="rw-rating d-inline-flex align-items-center">
                <span className="one-star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </span>
                <p className="rated">Rated 4.76/5 based on +1475 reviews</p>
              </div>
              <ProductInfo
                name={product.name}
                price={product.price}
                sale={product.sale}
                discount={product.discount}
                qty={qty}
                setQty={setQty}
                description={product.desc}
              />
              <ProductActions
                onAddToCart={() => dispatch(addToCart({ ...product, qty }))}
              />
              <p className="extra_utility">
                Sku: <span>SKU_45</span>
              </p>
              <p className="extra_utility">
                Available: <span>2</span>
              </p>
              <div className="checkout_card">
                <h2>Secure Checkout</h2>
                <img
                  src="/images/secure_payments-1.png"
                  srcSet="/images/secure_payments-1@2x.png 2x, /images/secure_payments-1@3x.png 3x"
                  className="img-fluid"
                  alt="About NexWatch"
                />
              </div>
            </div>
          </div>
          {/* Tabs, Reviews, Related Slider */}
          <ProductTabs
            description={product.desc}
            specs={product.specs}
            qa={product.qa}
          />
          <ProductReviewSection productId={product.id} />
          <RelatedProductsSlider
            currentProductId={product.id}
            brandName={product.brand.name}
          />
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
