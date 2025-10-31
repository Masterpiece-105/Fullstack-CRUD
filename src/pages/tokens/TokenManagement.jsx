// FILE: src/pages/tokens/TokenManagement.jsx
import React from 'react';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import { COLORS } from '../../constants/colors';

export default function TokenManagement() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column" style={{ minHeight: '100vh' }}>
        <Topbar title="Token Management" />
        <main className="p-4 bg-light flex-grow-1">
          <div className="card card-rounded shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">Tokens</h5>
                <div className="d-flex gap-2">
                  <input type="date" className="form-control form-control-sm" />
                  <select className="form-select form-select-sm">
                    <option>All Status</option>
                    <option>Booked</option>
                    <option>Arrived</option>
                    <option>Completed</option>
                  </select>
                  <input className="form-control form-control-sm" placeholder="Search..." />
                </div>
              </div>

              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Token ID</th>
                      <th>Name</th>
                      <th>Service</th>
                      <th>Slot Time</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>TKN1023</td>
                      <td>Snehal</td>
                      <td>Aadhaar Update</td>
                      <td>10:15 AM</td>
                      <td><span className="badge bg-warning text-dark">Booked</span></td>
                      <td>
                        <button className="btn btn-sm me-1" style={{ background: COLORS.aadhaarOrange, color: '#fff' }}>Mark Arrived</button>
                        <button className="btn btn-sm btn-outline-secondary me-1">Skip</button>
                        <button className="btn btn-sm btn-outline-secondary">Reschedule</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}




