import React, { useState, useEffect } from 'react';

export default function ProductModal({ product, onClose, onSave }) {
  const [form, setForm] = useState({
    title: '',
    description: '',
    price: 0,
    image: '',
    inStock: true
  });

  useEffect(() => {
    if (product) {
      setForm({
        title: product.title || '',
        description: product.description || '',
        price: product.price || 0,
        image: product.image || '',
        inStock: product.inStock ?? true
      });
    } else {
      setForm({ title: '', description: '', price: 0, image: '', inStock: true });
    }
  }, [product]);

  function change(e) {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  }

  function submit(e) {
    e.preventDefault();
    const payload = { ...form, price: Number(form.price) || 0 };
    onSave(payload);
  }

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2 style={{ marginBottom: 16, fontSize: 22, fontWeight: 600 }}>
          {product ? 'Edit Product' : 'Add Product'}
        </h2>

        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

          <input
            name="title"
            value={form.title}
            onChange={change}
            placeholder="Product Title"
            required
            style={inputStyle}
          />

          <textarea
            name="description"
            value={form.description}
            onChange={change}
            placeholder="Product Description"
            rows="3"
            style={textareaStyle}
          />

          <input
            name="price"
            type="number"
            value={form.price}
            onChange={change}
            step="0.01"
            placeholder="Price"
            style={inputStyle}
          />

          <input
            name="image"
            value={form.image}
            onChange={change}
            placeholder="Image URL"
            style={inputStyle}
          />

          <label style={{ fontSize: 15 }}>
            <input
              name="inStock"
              type="checkbox"
              checked={form.inStock}
              onChange={change}
              style={{ marginRight: 6 }}
            />
            In Stock
          </label>

          <div style={{ marginTop: 10, display: 'flex', gap: 10 }}>
            <button
              type="submit"
              style={{
                flex: 1,
                background: '#2563eb',
                border: 'none',
                color: '#fff',
                padding: '10px 16px',
                borderRadius: 8,
                cursor: 'pointer',
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              Save
            </button>

            <button
              type="button"
              onClick={onClose}
              style={{
                flex: 1,
                background: '#4b5563',
                border: 'none',
                color: '#fff',
                padding: '10px 16px',
                borderRadius: 8,
                cursor: 'pointer',
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const overlayStyle = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  background: 'rgba(0,0,0,0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
  backdropFilter: 'blur(3px)',
};

const modalStyle = {
  background: '#ffffff',
  padding: 24,
  borderRadius: 12,
  width: 500,
  maxWidth: '90%',
  boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
};

const inputStyle = {
  padding: 10,
  borderRadius: 8,
  border: '1px solid #d1d5db',
  fontSize: 15,
};

const textareaStyle = {
  padding: 10,
  borderRadius: 8,
  border: '1px solid #d1d5db',
  fontSize: 15,
  resize: 'vertical',
};
