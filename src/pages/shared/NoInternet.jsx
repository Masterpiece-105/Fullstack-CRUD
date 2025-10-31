// FILE: src/pages/shared/NoInternet.jsx
import React from 'react';

export default function NoInternet() {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="card p-4 text-center">
        <h5>No Internet Connection</h5>
        <p className="text-muted">You are offline. Please check your connection.</p>
      </div>
    </div>
  );
}