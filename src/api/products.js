const API_URL = process.env.REACT_APP_API_URL || '';

async function request(path, opts = {}) {
  const res = await fetch((API_URL || '') + path, opts);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || 'Request failed');
  }
  return res.json().catch(() => null);
}

export default {
  getAll: () => request('/api/products'),
  get: (id) => request(`/api/products/${id}`),
  create: (payload) => request('/api/products', { method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) }),
  update: (id, payload) => request(`/api/products/${id}`, { method: 'PUT', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) }),
  remove: (id) => request(`/api/products/${id}`, { method: 'DELETE' })
};
