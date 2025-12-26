import React, {useState, useEffect} from 'react';

const API_URL = process.env.REACT_APP_API_URL || '';

export default function ProductsManager() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', price: 0, image: '', inStock: true });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => { fetchProducts() }, []);

  async function fetchProducts() {
    const res = await fetch(`${API_URL}/api/products`);
    const data = await res.json();
    setProducts(data);
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const method = editingId ? 'PUT' : 'POST';
    const url = editingId ? `${API_URL}/api/products/${editingId}` : `${API_URL}/api/products`;
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, price: Number(form.price) })
    });
    if (res.ok) {
      setForm({ title: '', description: '', price: 0, image: '', inStock: true });
      setEditingId(null);
      fetchProducts();
    } else {
      alert('Error saving product');
    }
  }

  async function editProduct(p) {
    setEditingId(p._id);
    setForm({ title: p.title, description: p.description, price: p.price, image: p.image, inStock: p.inStock });
    window.scrollTo({top:0, behavior:'smooth'});
  }

  async function deleteProduct(id) {
    if (!confirm('Delete product?')) return;
    const res = await fetch(`${API_URL}/api/products/${id}`, { method: 'DELETE' });
    if (res.ok) fetchProducts();
  }

  return (
    <div style={{padding:20}}>
      <h2>Products Manager</h2>
      <form onSubmit={handleSubmit} style={{marginBottom:20}}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <br />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <br />
        <input name="price" type="number" step="0.01" value={form.price} onChange={handleChange} />
        <br />
        <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
        <br />
        <label><input name="inStock" type="checkbox" checked={form.inStock} onChange={handleChange} /> In stock</label>
        <br />
        <button type="submit">{editingId ? 'Save changes' : 'Add product'}</button>
        {editingId && <button type="button" onClick={() => { setForm({ title: '', description: '', price: 0, image: '', inStock: true }); setEditingId(null); }}>Cancel</button>}
      </form>

      <ul>
        {products.map(p => (
          <li key={p._id} style={{marginBottom:10}}>
            <strong>{p.title}</strong> — ₹{p.price}
            <div>
              <button onClick={() => editProduct(p)}>Edit</button>
              <button onClick={() => deleteProduct(p._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
