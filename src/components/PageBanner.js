import { useLocation, Link } from 'react-router-dom';

const PageBanner = ({ title }) => {
  const location = useLocation();


  if (location.pathname === '/') return null;


  const paths = location.pathname.split('/').filter(Boolean);

  return (
    <section
      className="page_banner text-white py-5"
      style={{
        backgroundImage: "url('/images/inner-banner.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <h2>{title}</h2>
        <p>
          <Link to="/" className="text-white text-decoration-none">Home</Link>
          {paths.map((p, i) => (
            <span key={i}>
              {' '} / {decodeURIComponent(p.charAt(0).toUpperCase() + p.slice(1).replaceAll('-', ' '))}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default PageBanner;