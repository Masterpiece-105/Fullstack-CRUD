import React from 'react';
import { Link } from "react-router-dom";
import { NavLink, useNavigate } from 'react-router-dom';
import { COLORS } from '../constants/colors';

const menu = [
  { title: 'Dashboard', to: '/dashboard', icon: 'bi-speedometer2' },
  { title: 'Tokens', to: '/tokens', icon: 'bi-card-list' },
  { title: 'QR Scanner', to: '/scanner', icon: 'bi-upc-scan' },
  { title: 'Notifications', to: '/notifications', icon: 'bi-bell' },
  { title: 'Reports', to: '/reports', icon: 'bi-bar-chart' },
];

export default function Sidebar({ collapsed = false }) {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column vh-100 bg-white shadow-sm" style={{ width: collapsed ? 88 : 250 }}>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: 80, background: COLORS.aadhaarOrange }}
      >
        <button className="btn btn-link text-white fw-bold" onClick={() => navigate('/dashboard')}>
          {!collapsed ? 'Aadhaar Admin' : 'AA'}
        </button>
      </div>

      <div className="p-3 flex-grow-1">
        {menu.map((m) => (
          <NavLink
            key={m.to}
            to={m.to}
            className={({ isActive }) =>
              `d-flex align-items-center gap-3 p-2 rounded mb-2 text-decoration-none ${isActive ? 'sidebar-link-active' : 'text-dark'}`
            }
            style={{ color: 'inherit' }}
          >
            <i className={`bi ${m.icon} fs-5`} />
            {!collapsed && <span className="fw-medium">{m.title}</span>}
          </NavLink>
        ))}
      </div>

      <div className="p-3 border-top">
         <Link
            to="/login"
            className="btn btn-outline-secondary w-100"
          >
            Logout
          </Link>
      </div>
    </div>
  );
}




