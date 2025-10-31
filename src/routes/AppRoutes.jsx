import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


import Login from '../pages/auth/Login';
import Dashboard from '../pages/dashboard/Dashboard';
import TokenManagement from '../pages/tokens/TokenManagement';
import QrScanner from '../pages/qr-scanner/QrScanner';
import Notifications from '../pages/notifications/Notifications';
import Reports from '../pages/reports/Reports';
import ErrorPage from '../pages/shared/ErrorPage';
import NoInternet from '../pages/shared/NoInternet';


export default function AppRoutes() {
return (
<Routes>
<Route path="/" element={<Navigate to="/login" replace />} />
<Route path="/login" element={<Login />} />

<Route path="/dashboard" element={<Dashboard />} />
<Route path="/tokens" element={<TokenManagement />} />
<Route path="/scanner" element={<QrScanner />} />
<Route path="/notifications" element={<Notifications />} />
<Route path="/reports" element={<Reports />} />


<Route path="/no-internet" element={<NoInternet />} />
<Route path="*" element={<ErrorPage />} />
</Routes>
);
}