// FILE: src/pages/dashboard/Dashboard.jsx
import React from 'react';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import StatsCard from './components/StatsCard';

export default function Dashboard() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column" style={{ minHeight: '100vh' }}>
        <Topbar title="Dashboard" />
        <main className="p-4 bg-light flex-grow-1">
          <div className="container-fluid">
            <div className="row gy-4">
              <div className="col-12 col-md-4">
                <StatsCard title="Tokens Booked" value="120" />
              </div>
              <div className="col-12 col-md-4">
                <StatsCard title="Arrived" value="80" />
              </div>
              <div className="col-12 col-md-4">
                <StatsCard title="Completed" value="60" />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-12">
                <div className="card card-rounded shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Live Queue</h5>
                    <div className="table-responsive mt-3">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>Token ID</th>
                            <th>Service</th>
                            <th>User Name</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>TKN1023</td>
                            <td>Aadhaar Update</td>
                            <td>Snehal</td>
                            <td><span className="badge bg-warning text-dark">Booked</span></td>
                            <td>
                              <button className="btn btn-sm" style={{ background: '#fff', border: '1px solid #ddd' }}>View</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

