const promises = [
  {
    icon: '/images/Online-Support.svg',
    title: 'Online Support',
    subtitle: '24 hours a day'
  },
  {
    icon: '/images/Secure-Payments.svg',
    title: 'Secure Payments',
    subtitle: 'Secure payment with PEV'
  },
  {
    icon: '/images/Refund-Policy.svg',
    title: 'Refund Policy',
    subtitle: 'Return within 30 days'
  },
  {
    icon: '/images/Free-Shipping.svg',
    title: 'Free Shipping',
    subtitle: 'On all orders over $100'
  }
];

const PromiseSection = () => {
  return (
    <section className="promise_sec">
      <div className="container">
        <div className="row text-center text-md-start">
          {promises.map((item, index) => (
            <div
              key={index}
              className="col-6 col-md-6 col-lg-3 mb-3 mb-lg-0 d-lg-flex text-center text-lg-start align-items-center"
            >
              <img src={item.icon} alt="icon" className="mb-2 mb-lg-0 me-lg-4" />
              <div>
                <h6>{item.title}</h6>
                <small className="text-muted">{item.subtitle}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;