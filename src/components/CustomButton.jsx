import React from 'react';
import { COLORS } from '../constants/colors';

export default function CustomButton({ children, variant = 'primary', onClick }) {
  const style = variant === 'primary' ? { background: COLORS.aadhaarOrange, borderColor: COLORS.aadhaarOrange, color: '#fff' } : {};
  const className = `btn ${variant === 'primary' ? '' : 'btn-outline-secondary'}`;
  return (
    <button className={className} style={style} onClick={onClick}>{children}</button>
  );
}