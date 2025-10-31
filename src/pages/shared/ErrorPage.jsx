// FILE: src/pages/shared/ErrorPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="text-center">
        <div className="display-1 fw-bold">404</div>
        <p className="text-muted">Page not found</p>
        <Link to="/dashboard" className="btn btn-link">Go Home</Link>
      </div>
    </div>
  );
}