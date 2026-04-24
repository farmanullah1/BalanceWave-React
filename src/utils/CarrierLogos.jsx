import React from 'react';

export function CarrierLogo({ carrier, size = 20 }) {
  switch (carrier) {
    case 'Jazz':
      // Jazz logo: deep red rounded box with a stylized 'jazz' text or star.
      // Recreating a high-fidelity vibe.
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="20" fill="#E3000F" />
          <path d="M 45 35 L 55 35 L 50 65 Z" fill="#FFC800" />
          <circle cx="50" cy="25" r="5" fill="#FFC800" />
          <path d="M 30 70 Q 50 85 70 70" stroke="#FFF" strokeWidth="8" strokeLinecap="round" />
        </svg>
      );
    case 'Zong':
      // Zong logo: Green and Magenta curved overlapping shapes.
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="20" fill="#E6007E" />
          <path d="M 10 50 Q 50 10 90 50 L 90 90 Q 50 50 10 90 Z" fill="#8DC63F" />
          <path d="M 30 40 L 70 40 L 30 70 L 70 70" stroke="#FFF" strokeWidth="12" strokeLinejoin="round" />
        </svg>
      );
    case 'Ufone':
      // Ufone logo: Orange background, distinct 'U' shape.
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="20" fill="#FF7900" />
          <path d="M 30 25 L 30 55 C 30 80 70 80 70 55 L 70 25" stroke="#FFF" strokeWidth="18" strokeLinecap="round" />
        </svg>
      );
    case 'Telenor':
      // Telenor logo: Light blue background with the 3 petal blue shape.
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="20" fill="#00A5CF" />
          <circle cx="50" cy="30" r="15" fill="#FFF" />
          <circle cx="30" cy="65" r="15" fill="#FFF" />
          <circle cx="70" cy="65" r="15" fill="#FFF" />
          <path d="M 50 30 C 50 60 30 65 30 65" stroke="#FFF" strokeWidth="15" strokeLinecap="round" />
          <path d="M 50 30 C 50 60 70 65 70 65" stroke="#FFF" strokeWidth="15" strokeLinecap="round" />
        </svg>
      );
    case 'Onic':
      // Onic logo: Purple background with a distinct simple 'O'.
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="20" fill="#6A0DAD" />
          <circle cx="50" cy="50" r="28" stroke="#FFF" strokeWidth="16" />
          <circle cx="50" cy="50" r="8" fill="#FFF" />
        </svg>
      );
    case 'SCOm':
      // SCOm logo: Blue background, orange wave.
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="20" fill="#2196F3" />
          <path d="M 15 50 C 35 20 65 80 85 50" stroke="#FF9800" strokeWidth="16" strokeLinecap="round" />
          <circle cx="85" cy="50" r="8" fill="#FF9800" />
        </svg>
      );
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="20" fill="#A0AAB5" />
          <circle cx="50" cy="50" r="25" stroke="#FFF" strokeWidth="10" />
        </svg>
      );
  }
}
