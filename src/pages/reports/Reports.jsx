// FILE: src/pages/reports/Reports.jsx
import React from 'react';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';

export default function Reports() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column" style={{ minHeight: '100vh' }}>
        <Topbar title="Reports" />
        <main className="p-4 bg-light flex-grow-1">
          <div className="row g-4">
            <div className="col-12 col-md-3">
              <div className="card card-rounded shadow-sm p-3">
                <div className="text-muted small">Total Tokens</div>
                <div className="fs-4 fw-bold" style={{ color: '#FF6600' }}>350</div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="card card-rounded shadow-sm p-3">
                <div className="text-muted small">Arrived</div>
                <div className="fs-4 fw-bold" style={{ color: '#FF6600' }}>200</div>
              </div>
            </div>

            <div className="col-12 mt-3">
              <div className="card card-rounded shadow-sm p-3">
                <h6>Bookings Over Time</h6>
                <div className="h-48 d-flex align-items-center justify-content-center text-muted">Bar chart placeholder</div>
              </div>
            </div>

            <div className="col-12 mt-3">
              <div className="card card-rounded shadow-sm p-3">
                <h6>Status Distribution</h6>
                <div className="h-48 d-flex align-items-center justify-content-center text-muted">Pie chart placeholder</div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
