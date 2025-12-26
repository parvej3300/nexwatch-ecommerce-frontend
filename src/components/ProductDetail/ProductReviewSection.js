const ProductReviewSection = () => {
  // const ratingStats = [
  //   { stars: 5, count: 103 },
  //   { stars: 4, count: 20 },
  //   { stars: 3, count: 7 },
  //   { stars: 2, count: 5 },
  //   { stars: 1, count: 5 },
  // ];

  const reviews = [
    {
      id: 1,
      name: "Andreas Markson",
      date: "3 days ago",
      rating: 5,
      title: "Perfect Balance of Style and Performance!",
      content:
        "I've been using the Pulse X1 for a week now, and it’s amazing! The display is super clear, and I love how I can take calls directly from my wrist. Fitness tracking is accurate, and the battery easily lasts 5–6 days. Definitely worth the price.",
      image: "/images/product-1.png",
    },
    {
      id: 2,
      name: "Ava Thompson",
      date: "3 days ago",
      rating: 5,
      title: "Feature-Rich and Very Comfortable",
      content:
        "This smartwatch exceeded my expectations! It’s stylish, light, and fits perfectly on my wrist. The health tracking features like heart rate and sleep monitoring are very useful. I also love how easy it is to connect with my iPhone. Great value for money!",
      image: "/images/product-2.png",
    },
  ];

  return (
    <section className="product_reviews">
      <h3>Our Reviews</h3>
      <div className="rating d-flex gap-3 my-2">
        <span className="rating-point">4.9</span>
        <div className="rating_count">
          <div className="d-flex gap-1 justify-content-center align-items-center">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <span>(135 Reviews )</span>
        </div>
      </div>

      {/* Rating Breakdown */}
      <div className="col-lg-4 col-md-8 col-10">
        <div className="customer-review">
          <div className="rating-bar">
            <div className="review_rating d-flex justify-content-center align-items-center pe-3 star5">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="progress flex-grow-1">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "71.3%" }}
              ></div>
            </div>
            <span className="count ms-2">103</span>
          </div>
          <div className="rating-bar">
            <div className="review_rating d-flex justify-content-center align-items-center pe-3 star4">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="progress flex-grow-1">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "21.0%" }}
              ></div>
            </div>
            <span className="count ms-2">20</span>
          </div>
          <div className="rating-bar">
            <div className="review_rating d-flex justify-content-center align-items-center pe-3 star2">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="progress flex-grow-1">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "7.4%" }}
              ></div>
            </div>
            <span className="count ms-2">7</span>
          </div>
          <div className="rating-bar">
            <div className="review_rating d-flex justify-content-center align-items-center pe-3 star1">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="progress flex-grow-1">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "0.2%" }}
              ></div>
            </div>
            <span className="count ms-2">5</span>
          </div>
          <div className="rating-bar">
            <div className="review_rating d-flex justify-content-center align-items-center pe-3">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="progress flex-grow-1">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "0%" }}
              ></div>
            </div>
            <span className="count ms-2">0</span>
          </div>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="col-lg-12">
        <div className="rating-filter align-items-center d-flex gap-3 my-3">
          <div className="fw-bold">Filter Reviews</div>
          <select className="form-select" defaultValue="Rating">
            <option value="Rating">Rating</option>
            <option value="One">One</option>
            <option value="Two">Two</option>
            <option value="Three">Three</option>
          </select>
          <div className="fw-bold cl-filter">Clear Filter</div>
          <div></div>
        </div>
      </div>

      {/* Review Cards */}
      <div className="row">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="main_rev_box col-lg-10"
          >
            <div className="row sub_rev_box">
              <div className="content_box col-lg-8">
                <h5>{review.date}</h5>
                <h6>{review.name}</h6>
                <div className="d-flex align-items-center stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <span className="ms-1 d-none">{review.rating}</span>
                </div>
                <h4>{review.title}</h4>
                <p>{review.content}</p>
              </div>
              <div className="col-lg-4 text-start text-lg-end">
                <img
                  src={review.image}
                  alt="product"
                  className="img-fluid ms-auto"
                  style={{ maxWidth: 225 }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductReviewSection;
