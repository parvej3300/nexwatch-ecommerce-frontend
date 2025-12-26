import React from 'react';

export default function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div
      style={{
        border: '1px solid #e5e7eb',
        padding: 16,
        borderRadius: 12,
        background: '#ffffff',
        boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
        transition: '0.2s',
      }}
    >
      {product.image && (
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: '100%',
            height: 180,
            objectFit: 'cover',
            borderRadius: 10,
            marginBottom: 12,
          }}
        />
      )}

      <h3
        style={{
          fontSize: 18,
          fontWeight: 600,
          marginBottom: 6,
          color: '#111827',
        }}
      >
        {product.title}
      </h3>

      <p style={{ fontSize: 14, color: '#4b5563', marginBottom: 8 }}>
        {product.description}
      </p>

      <p style={{ margin: '6px 0', fontSize: 15 }}>
        <strong>Price:</strong> ₹{product.price}
      </p>
      <p style={{ margin: '6px 0', fontSize: 15 }}>
        <strong>In Stock:</strong>{' '}
        <span style={{ color: product.inStock ? '#059669' : '#dc2626' }}>
          {product.inStock ? 'Yes' : 'No'}
        </span>
      </p>

      <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
        <button
          onClick={onEdit}
          style={{
            flex: 1,
            background: '#2563eb',
            border: 'none',
            color: '#fff',
            padding: '8px 12px',
            borderRadius: 6,
            cursor: 'pointer',
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          ✏️ Edit
        </button>

        <button
          onClick={onDelete}
          style={{
            flex: 1,
            background: '#dc2626',
            border: 'none',
            color: '#fff',
            padding: '8px 12px',
            borderRadius: 6,
            cursor: 'pointer',
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}
