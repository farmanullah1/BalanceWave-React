import React from 'react';

// Common carrier colors
// Jazz: Red/Black
// Zong: Pink/Green
// Ufone: Orange
// Telenor: Blue
// Onic: Purple
// SCOm: Orange/Blue

export function CarrierLogo({ carrier, size = 20 }) {
  switch (carrier) {
    case 'Jazz':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" fill="#E31837" />
          <path d="M 30 70 L 30 30 L 70 30 L 70 50 L 50 50 L 50 70 Z" fill="#000" />
        </svg>
      );
    case 'Zong':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100">
          <rect width="100" height="100" rx="20" fill="#E91E63" />
          <path d="M 25 30 L 75 30 L 25 70 L 75 70" fill="none" stroke="#4CAF50" strokeWidth="15" strokeLinejoin="bevel" />
        </svg>
      );
    case 'Ufone':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" fill="#FF7900" />
          <path d="M 30 30 L 30 55 C 30 75 70 75 70 55 L 70 30" fill="none" stroke="#FFF" strokeWidth="15" strokeLinecap="round" />
        </svg>
      );
    case 'Telenor':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" fill="#00A5CF" />
          <path d="M 50 25 C 75 25 75 75 50 75" fill="none" stroke="#FFF" strokeWidth="15" strokeLinecap="round" />
          <circle cx="35" cy="50" r="10" fill="#FFF" />
        </svg>
      );
    case 'Onic':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" fill="#6A0DAD" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="#FFF" strokeWidth="10" />
        </svg>
      );
    case 'SCOm':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100">
          <rect width="100" height="100" rx="20" fill="#2196F3" />
          <path d="M 25 60 C 25 30 75 30 75 60 C 75 90 25 90 25 60" fill="none" stroke="#FF9800" strokeWidth="12" />
          <path d="M 40 50 L 60 50" stroke="#FFF" strokeWidth="10" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" fill="#ccc" />
          <circle cx="50" cy="50" r="20" fill="#fff" />
        </svg>
      );
  }
}
