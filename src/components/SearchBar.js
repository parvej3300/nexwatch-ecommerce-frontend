import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/shop?search=${encodeURIComponent(keyword)}`);
    }
  };

  return (
    <form className="d-flex d-none me-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control form-control-sm"
        placeholder="Search products..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="submit" className="btn btn-sm btn-outline-primary ms-2">
        Search
      </button>
    </form>
  );
};

export default SearchBar;