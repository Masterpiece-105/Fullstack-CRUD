// FILE: src/pages/notifications/Notifications.jsx
import React from 'react';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';

export default function Notifications() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column" style={{ minHeight: '100vh' }}>
        <Topbar title="Notifications" />
        <main className="p-4 bg-light flex-grow-1">
          <div className="card card-rounded shadow-sm mb-4">
            <div className="card-body">
              <h5 className="mb-3">Send Notification</h5>
              <div className="row g-2">
                <div className="col-md-4">
                  <select className="form-select form-select-sm">
                    <option>Select Service Center</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    
                  </select>
                </div>
                <div className="col-md-4">
                  <select className="form-select form-select-sm">
                    <option>Select Users</option>
                  </select>
                </div>
                <div className="col-md-4 text-end">
                  <button className="btn" style={{ background: '#FF6600', color: '#fff' }}>Send</button>
                </div>
                <div className="col-12 mt-3">
                  <textarea className="form-control" rows="4" placeholder="Message..."></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="card card-rounded shadow-sm">
            <div className="card-body">
              <h5 className="mb-3">Past Notifications</h5>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Message</th>
                      <th>Audience</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2025-10-01</td>
                      <td>Delay in service today</td>
                      <td>All</td>
                      <td><span className="badge bg-success">Sent</span></td>
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
