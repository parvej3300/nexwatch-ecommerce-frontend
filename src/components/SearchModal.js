import React, { useState, useEffect } from 'react';
import products from '../data/products';
import { Link } from 'react-router-dom';

const SearchModal = ({ show, onClose }) => {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (query.trim().length > 0) {
      const results = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFiltered(results);
    } else {
      setFiltered([]);
    }
  }, [query]);

  if (!show) return null;

  return (
    <div
      className="search-modal-overlay position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-start pt-5"
      style={{ zIndex: 1050 }}
    >
      <div className="bg-white p-4 rounded shadow w-100 mx-3" style={{ maxWidth: '600px' }}>
        {/* Close Button */}
        <div className="text-end">
          <button className="btn-close" onClick={onClose}></button>
        </div>

        {/* Search Input */}
        <input
          type="text"
          className="form-control mt-2 mb-3"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />

        {/* Results */}
        {filtered.length > 0 && (
          <ul className="list-group list-group-flush">
            {filtered.map((product) => (
              <li key={product.id} className="list-group-item">
                <Link
                  to={`/product/${product.id}`}
                  onClick={onClose}
                  className="d-flex align-items-center text-decoration-none text-dark"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="me-3"
                    style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  />
                  <div>
                    <h6 className="mb-1">{product.name}</h6>
                    <small className="text-muted">{product.desc.slice(0, 80)}...</small>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* No Results */}
        {query && filtered.length === 0 && (
          <p className="text-muted mb-0">No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchModal;