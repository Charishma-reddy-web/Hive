import React from 'react';

const AudienceIcon3D = ({ children, color }: { children: React.ReactNode, color: string }) => (
  <div className="relative flex items-center justify-center w-full h-full shrink-0">
    <div className="absolute inset-0 rounded-full opacity-20 blur-md" style={{ backgroundColor: color }} />
    <svg viewBox="0 0 100 100" className="w-full h-full relative z-10" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.6))' }}>
      <defs>
        <linearGradient id={`grad-aud-${color.replace('#','')}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="30%" stopColor={color} stopOpacity="0.95" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <g fill={`url(#grad-aud-${color.replace('#','')})`}>
        {children}
      </g>
    </svg>
  </div>
);

// 1. SaaS Businesses (Cloud) - #00F0B5
export const IconSaaS = () => (
  <AudienceIcon3D color="#00F0B5">
    <path d="M 35 65 A 15 15 0 0 1 35 35 A 20 20 0 0 1 70 40 A 12 12 0 0 1 70 65 Z" />
  </AudienceIcon3D>
);

// 2. AI Startups (CPU/Brain) - #8B5CF6
export const IconAI = () => (
  <AudienceIcon3D color="#8B5CF6">
    <rect x="25" y="25" width="50" height="50" rx="10" />
    <rect x="35" y="35" width="30" height="30" rx="5" fill="#ffffff" fillOpacity="0.3" />
    {/* Pins */}
    <rect x="15" y="30" width="10" height="6" rx="2" />
    <rect x="15" y="47" width="10" height="6" rx="2" />
    <rect x="15" y="64" width="10" height="6" rx="2" />
    <rect x="75" y="30" width="10" height="6" rx="2" />
    <rect x="75" y="47" width="10" height="6" rx="2" />
    <rect x="75" y="64" width="10" height="6" rx="2" />
  </AudienceIcon3D>
);

// 3. Enterprise Tech (Server Stack) - #F59E0B
export const IconEnterprise = () => (
  <AudienceIcon3D color="#F59E0B">
    <rect x="20" y="20" width="60" height="15" rx="4" />
    <rect x="20" y="42.5" width="60" height="15" rx="4" />
    <rect x="20" y="65" width="60" height="15" rx="4" />
    <circle cx="30" cy="27.5" r="3" fill="#fff" fillOpacity="0.5" />
    <circle cx="30" cy="50" r="3" fill="#fff" fillOpacity="0.5" />
    <circle cx="30" cy="72.5" r="3" fill="#fff" fillOpacity="0.5" />
  </AudienceIcon3D>
);

// 4. Global Capabilities (Globe) - #3B82F6
export const IconGlobal = () => (
  <AudienceIcon3D color="#3B82F6">
    <circle cx="50" cy="50" r="30" />
    <path d="M 50 20 C 70 20, 70 80, 50 80" fill="none" stroke="#fff" strokeOpacity="0.3" strokeWidth="4" />
    <path d="M 50 20 C 30 20, 30 80, 50 80" fill="none" stroke="#fff" strokeOpacity="0.3" strokeWidth="4" />
    <line x1="22" y1="50" x2="78" y2="50" stroke="#fff" strokeOpacity="0.3" strokeWidth="4" />
  </AudienceIcon3D>
);

// 5. Consulting Firms (Briefcase) - #EC4899
export const IconConsulting = () => (
  <AudienceIcon3D color="#EC4899">
    <path d="M 40 30 L 40 20 A 10 10 0 0 1 60 20 L 60 30" fill="none" stroke={`url(#grad-aud-EC4899)`} strokeWidth="6" />
    <rect x="15" y="30" width="70" height="50" rx="6" />
    <rect x="40" y="45" width="20" height="10" rx="3" fill="#fff" fillOpacity="0.3" />
  </AudienceIcon3D>
);

// 6. Cloud & Data Platforms (Database) - #10B981
export const IconData = () => (
  <AudienceIcon3D color="#10B981">
    <ellipse cx="50" cy="30" rx="25" ry="10" />
    <path d="M 25 30 L 25 50 A 25 10 0 0 0 75 50 L 75 30 Z" />
    <path d="M 25 50 L 25 70 A 25 10 0 0 0 75 70 L 75 50 Z" />
  </AudienceIcon3D>
);

// 7. B2B Services (Network Nodes) - #F43F5E
export const IconB2B = () => (
  <AudienceIcon3D color="#F43F5E">
    <circle cx="50" cy="25" r="12" />
    <circle cx="25" cy="65" r="12" />
    <circle cx="75" cy="65" r="12" />
    <line x1="43" y1="35" x2="32" y2="55" stroke={`url(#grad-aud-F43F5E)`} strokeWidth="8" />
    <line x1="57" y1="35" x2="68" y2="55" stroke={`url(#grad-aud-F43F5E)`} strokeWidth="8" />
    <line x1="35" y1="65" x2="65" y2="65" stroke={`url(#grad-aud-F43F5E)`} strokeWidth="8" />
  </AudienceIcon3D>
);

// 8. Transformation (Gear) - #06B6D4
export const IconTransformation = () => (
  <AudienceIcon3D color="#06B6D4">
    <path d="M 50 15 L 56 25 A 20 20 0 0 1 65 30 L 75 25 L 80 35 L 70 42 A 20 20 0 0 1 70 58 L 80 65 L 75 75 L 65 70 A 20 20 0 0 1 56 75 L 50 85 L 40 85 L 44 75 A 20 20 0 0 1 35 70 L 25 75 L 20 65 L 30 58 A 20 20 0 0 1 30 42 L 20 35 L 25 25 L 35 30 A 20 20 0 0 1 44 25 L 40 15 Z" />
    <circle cx="50" cy="50" r="10" fill="#fff" fillOpacity="0.3" />
  </AudienceIcon3D>
);
