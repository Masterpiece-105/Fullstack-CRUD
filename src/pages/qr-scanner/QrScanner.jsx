
// FILE: src/pages/qr-scanner/QrScanner.jsx
import React from 'react';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import { COLORS } from '../../constants/colors';

export default function QrScanner() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column" style={{ minHeight: '100vh' }}>
        <Topbar title="QR Scanner" />
        <main className="p-4 bg-light flex-grow-1 d-flex align-items-start justify-content-center">
          <div className="card card-rounded shadow-sm" style={{ width: 640 }}>
            <div className="card-body text-center">
              <h5 className="card-title">QR Scanner</h5>
              <p className="text-muted">Camera preview placeholder</p>

              <div className="mx-auto mt-3 rounded" style={{ width: 320, height: 320, border: `4px solid ${COLORS.aadhaarOrange}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="text-muted">Camera Preview</div>
              </div>

              <div className="mt-3">
                <button className="btn" style={{ background: COLORS.aadhaarOrange, color: '#fff' }}>Start Scan</button>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}