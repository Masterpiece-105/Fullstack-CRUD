import React from "react";
import { Link } from "react-router-dom";
import { COLORS } from "../constants/colors";

export default function Topbar({ title }) {
  return (
    <header
      className="d-flex align-items-center justify-content-between bg-white px-4"
      style={{ height: 64, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
    >
      <h4 className="mb-0" style={{ color: COLORS.aadhaarOrange }}>
        {title}
      </h4>

      <div className="d-flex align-items-center gap-3">
        <div className="input-group d-none d-md-flex">
          <input className="form-control form-control-sm" placeholder="Search..." />
          <span className="input-group-text">
            <i className="bi bi-search" />
          </span>
        </div>

        <div className="d-flex align-items-center gap-2">
          <div className="text-muted d-none d-md-block">Admin</div>
          <div
            className="rounded-circle d-flex align-items-center justify-content-center text-white"
            style={{ width: 36, height: 36, background: COLORS.aadhaarOrange }}
          >
            A
          </div>

          
        </div>
      </div>
    </header>
  );
}
