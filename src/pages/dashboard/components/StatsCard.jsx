// FILE: src/pages/dashboard/components/StatsCard.jsx
import React from 'react';
import { COLORS } from '../../../constants/colors';

export default function StatsCard({ title, value }) {
  return (
    <div className="card card-rounded shadow-sm">
      <div className="card-body">
        <div className="text-muted small">{title}</div>
        <div className="mt-2" style={{ fontSize: 28, fontWeight: 700, color: COLORS.aadhaarOrange }}>{value}</div>
      </div>
    </div>
  );
}

