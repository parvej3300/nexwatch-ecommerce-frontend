import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import api from '../api/products';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => { fetchProducts() }, []);

  async function fetchProducts() {
    setLoading(true);
    try {
      const res = await api.getAll();
      setProducts(res || []);
    } catch (err) {
      console.error(err);
      alert('Failed to load products');
    } finally {
      setLoading(false);
    }
  }

  function openAdd() {
    setEditingProduct(null);
    setShowModal(true);
  }

  function openEdit(p) {
    setEditingProduct(p);
    setShowModal(true);
  }

  async function handleSave(payload) {
    try {
      if (editingProduct && editingProduct._id) {
        await api.update(editingProduct._id, payload);
      } else {
        await api.create(payload);
      }
      setShowModal(false);
      fetchProducts();
    } catch (err) {
      console.error(err);
      alert('Save failed');
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Delete product?')) return;
    try {
      await api.remove(id);
      fetchProducts();
    } catch (err) {
      console.error(err);
      alert('Delete failed');
    }
  }

  return (
    <div style={{ padding: "30px", maxWidth: "1200px", margin: "0 auto" }}>
      
      {/* Page Title */}
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "700",
          marginBottom: "20px",
          color: "#222",
        }}
      >
        Admin — Products
      </h1>

      {/* Add Button */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={openAdd}
          style={{
            background: "#2563eb",
            color: "white",
            padding: "10px 18px",
            borderRadius: "8px",
            border: "none",
            fontSize: "15px",
            cursor: "pointer",
            fontWeight: "500",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            transition: "0.2s",
          }}
          onMouseOver={(e) => (e.target.style.background = "#1e4ecb")}
          onMouseOut={(e) => (e.target.style.background = "#2563eb")}
        >
          ➕ Add Product
        </button>
      </div>

      {/* Product List */}
      {loading ? (
        <div style={{ fontSize: "18px", color: "#555" }}>Loading...</div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {products.map((p) => (
            <ProductCard
              key={p._id}
              product={p}
              onEdit={() => openEdit(p)}
              onDelete={() => handleDelete(p._id)}
            />
          ))}
        </div>
      )}

      {/* Product Modal */}
      {showModal && (
        <ProductModal
          product={editingProduct}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
