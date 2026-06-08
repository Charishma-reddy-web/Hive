import React from 'react';

// Common base for 3D glassy look
const IconBase = ({ children, color, className = "" }: { children: React.ReactNode, color: string, className?: string }) => (
  <div className={`relative flex items-center justify-center w-full h-full ${className}`}>
    <div className="absolute inset-0 rounded-full opacity-30 blur-xl" style={{ backgroundColor: color }} />
    <svg viewBox="0 0 100 100" className="w-full h-full relative z-10" style={{ filter: `drop-shadow(0 8px 12px rgba(0,0,0,0.6))` }}>
      {children}
    </svg>
  </div>
);

export const Cloud3D = ({ color }: { color: string }) => (
  <IconBase color={color}>
    <defs>
      <linearGradient id={`cloud-${color}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
        <stop offset="50%" stopColor={color} stopOpacity="0.5" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0.8" />
      </linearGradient>
      <radialGradient id={`cloudGlow-${color}`} cx="50%" cy="30%" r="50%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
        <stop offset="100%" stopColor={color} stopOpacity="0" />
      </radialGradient>
    </defs>
    
    {/* Back cloud layer */}
    <path d="M 35 65 A 15 15 0 0 1 35 35 A 25 25 0 0 1 75 40 A 15 15 0 0 1 75 70 Z" fill="#222" opacity="0.6" transform="translate(4, 4)" />
    
    {/* Main cloud body */}
    <path d="M 35 60 A 15 15 0 0 1 35 30 A 25 25 0 0 1 75 35 A 15 15 0 0 1 75 65 Z" fill={`url(#cloud-${color})`} />
    <path d="M 35 60 A 15 15 0 0 1 35 30 A 25 25 0 0 1 75 35 A 15 15 0 0 1 75 65 Z" fill={`url(#cloudGlow-${color})`} />
    
    {/* Glass highlight */}
    <path d="M 35 32 A 23 23 0 0 1 65 37 A 13 13 0 0 0 45 35 Z" fill="#ffffff" opacity="0.5" filter="blur(1px)" />
  </IconBase>
);

export const Chip3D = ({ color }: { color: string }) => (
  <IconBase color={color}>
    <defs>
      <linearGradient id={`chipBase-${color}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#333" />
        <stop offset="100%" stopColor="#000" />
      </linearGradient>
      <linearGradient id={`chipCore-${color}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={color} stopOpacity="0.9" />
        <stop offset="100%" stopColor="#000" stopOpacity="0.8" />
      </linearGradient>
    </defs>
    <g transform="rotate(15 50 50) translate(0, -5)">
      {/* Base plate */}
      <rect x="25" y="25" width="50" height="50" rx="4" fill={`url(#chipBase-${color})`} stroke="#444" strokeWidth="2" />
      
      {/* Pins */}
      {[30, 40, 50, 60].map(pos => (
        <React.Fragment key={pos}>
          <rect x="20" y={pos - 2} width="8" height="4" fill={color} />
          <rect x="72" y={pos - 2} width="8" height="4" fill={color} />
          <rect x={pos - 2} y="20" width="4" height="8" fill={color} />
          <rect x={pos - 2} y="72" width="4" height="8" fill={color} />
        </React.Fragment>
      ))}
      
      {/* Inner core */}
      <rect x="35" y="35" width="30" height="30" rx="2" fill={`url(#chipCore-${color})`} stroke={color} strokeWidth="1" />
      
      {/* Circuit lines */}
      <path d="M 40 40 L 45 45 M 60 40 L 55 45 M 40 60 L 45 55 M 60 60 L 55 55" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <circle cx="50" cy="50" r="4" fill="#fff" className="animate-pulse" style={{ filter: `drop-shadow(0 0 4px ${color})` }} />
    </g>
  </IconBase>
);

export const Building3D = ({ color }: { color: string }) => (
  <IconBase color={color}>
    <defs>
      <linearGradient id={`bldgFront-${color}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={color} stopOpacity="0.6" />
        <stop offset="100%" stopColor="#111" />
      </linearGradient>
      <linearGradient id={`bldgSide-${color}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={color} stopOpacity="0.3" />
        <stop offset="100%" stopColor="#000" />
      </linearGradient>
    </defs>
    <g transform="translate(50, 75)">
      {/* Side face */}
      <polygon points="0,0 20,-10 20,-50 0,-40" fill={`url(#bldgSide-${color})`} />
      {/* Front face */}
      <polygon points="0,0 -20,-10 -20,-60 0,-50" fill={`url(#bldgFront-${color})`} />
      {/* Top face */}
      <polygon points="0,-50 -20,-60 0,-70 20,-60" fill={color} opacity="0.8" />
      
      {/* Windows Front */}
      <g fill="#fff" opacity="0.8" style={{ filter: `drop-shadow(0 0 2px ${color})` }}>
        {[...Array(4)].map((_, r) => (
          [...Array(2)].map((_, c) => (
             <polygon key={`f-${r}-${c}`} points={`${-15 + c*7},${-20 - r*9} ${-10 + c*7},${-17.5 - r*9} ${-10 + c*7},${-13.5 - r*9} ${-15 + c*7},${-16 - r*9}`} />
          ))
        ))}
      </g>
      {/* Windows Side */}
      <g fill="#fff" opacity="0.4">
        {[...Array(3)].map((_, r) => (
          [...Array(2)].map((_, c) => (
             <polygon key={`s-${r}-${c}`} points={`${5 + c*6},${-17.5 - r*9} ${10 + c*6},${-20 - r*9} ${10 + c*6},${-16 - r*9} ${5 + c*6},${-13.5 - r*9}`} />
          ))
        ))}
      </g>
    </g>
  </IconBase>
);

export const Globe3D = ({ color }: { color: string }) => (
  <IconBase color={color}>
    <defs>
      <radialGradient id={`globe-${color}`} cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor={color} stopOpacity="0.4" />
        <stop offset="70%" stopColor="#000" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#111" />
      </radialGradient>
    </defs>
    {/* Base sphere */}
    <circle cx="50" cy="50" r="30" fill={`url(#globe-${color})`} stroke={color} strokeWidth="1" opacity="0.8" />
    
    {/* Latitude / Longitude arcs */}
    <path d="M 20 50 A 30 15 0 0 0 80 50 A 30 15 0 0 0 20 50" fill="none" stroke={color} strokeWidth="0.5" opacity="0.6" />
    <path d="M 50 20 A 15 30 0 0 0 50 80 A 15 30 0 0 0 50 20" fill="none" stroke={color} strokeWidth="0.5" opacity="0.6" />
    <circle cx="50" cy="50" r="30" fill="none" stroke={color} strokeWidth="1.5" opacity="0.8" />
    
    {/* Glowing Nodes */}
    <g fill="#fff" style={{ filter: `drop-shadow(0 0 4px ${color})` }}>
      <circle cx="35" cy="45" r="2" />
      <circle cx="65" cy="55" r="2" />
      <circle cx="50" cy="35" r="2.5" />
      <circle cx="45" cy="65" r="1.5" />
      
      {/* Connections */}
      <path d="M 35 45 L 50 35 L 65 55 L 45 65 Z" fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.5" />
    </g>
  </IconBase>
);

export const Briefcase3D = ({ color }: { color: string }) => (
  <IconBase color={color}>
    <defs>
      <linearGradient id={`caseFront-${color}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={color} stopOpacity="0.7" />
        <stop offset="100%" stopColor="#111" />
      </linearGradient>
      <linearGradient id={`caseTop-${color}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
        <stop offset="100%" stopColor={color} stopOpacity="0.2" />
      </linearGradient>
    </defs>
    <g transform="translate(50, 55)">
      {/* Shadow */}
      <ellipse cx="0" cy="20" rx="25" ry="6" fill="#000" opacity="0.6" />
      {/* Front Face */}
      <path d="M -22 -10 L 22 -10 L 22 15 A 3 3 0 0 1 19 18 L -19 18 A 3 3 0 0 1 -22 15 Z" fill={`url(#caseFront-${color})`} />
      {/* Top Face */}
      <path d="M -20 -16 L 20 -16 L 22 -10 L -22 -10 Z" fill={`url(#caseTop-${color})`} />
      {/* Handle */}
      <path d="M -8 -16 L -8 -22 A 3 3 0 0 1 -5 -25 L 5 -25 A 3 3 0 0 1 8 -22 L 8 -16" fill="none" stroke="#666" strokeWidth="2.5" strokeLinecap="round" />
      {/* Locks */}
      <rect x="-12" y="-12" width="4" height="6" rx="1" fill="#ccc" />
      <rect x="8" y="-12" width="4" height="6" rx="1" fill="#ccc" />
      {/* Highlight */}
      <path d="M -20 -8 L 20 -8" fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.5" />
    </g>
  </IconBase>
);

export const Database3D = ({ color }: { color: string }) => (
  <IconBase color={color}>
    <defs>
      <linearGradient id={`dbCyl-${color}`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#111" />
        <stop offset="50%" stopColor={color} stopOpacity="0.5" />
        <stop offset="100%" stopColor="#000" />
      </linearGradient>
    </defs>
    <g transform="translate(50, 35)">
      {[2, 1, 0].map(i => (
        <g key={i} transform={`translate(0, ${i * 15})`}>
          <path d="M -20 0 L -20 10 A 20 8 0 0 0 20 10 L 20 0 Z" fill={`url(#dbCyl-${color})`} />
          <ellipse cx="0" cy="0" rx="20" ry="8" fill="#222" stroke={color} strokeWidth="1.5" />
          {/* Data dot */}
          <circle cx={-10 + i*10} cy="0" r="2" fill="#fff" className="animate-pulse" style={{ filter: `drop-shadow(0 0 4px ${color})`, animationDelay: `${i*0.2}s` }} />
        </g>
      ))}
      {/* Light beam */}
      <path d="M 0 -10 L 0 30" fill="none" stroke={color} strokeWidth="1" strokeDasharray="2,2" opacity="0.8" className="animate-pulse" />
    </g>
  </IconBase>
);

export const Network3D = ({ color }: { color: string }) => (
  <IconBase color={color}>
    <defs>
      <radialGradient id={`netCenter-${color}`} cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#fff" />
        <stop offset="50%" stopColor={color} />
        <stop offset="100%" stopColor="#000" />
      </radialGradient>
    </defs>
    <g transform="translate(50, 50)">
      {/* Lines */}
      <path d="M 0 0 L -20 -15 M 0 0 L 25 -10 M 0 0 L -15 20 M 0 0 L 20 20" stroke={color} strokeWidth="1.5" opacity="0.7" />
      <path d="M -20 -15 L 25 -10 L 20 20 L -15 20 Z" stroke={color} strokeWidth="0.5" opacity="0.3" strokeDasharray="3,3" />
      
      {/* Satellites */}
      <circle cx="-20" cy="-15" r="4" fill="#222" stroke={color} strokeWidth="1" />
      <circle cx="25" cy="-10" r="5" fill="#222" stroke={color} strokeWidth="1" />
      <circle cx="-15" cy="20" r="3" fill="#222" stroke={color} strokeWidth="1" />
      <circle cx="20" cy="20" r="4" fill="#222" stroke={color} strokeWidth="1" />
      
      {/* Center node */}
      <circle cx="0" cy="0" r="10" fill={`url(#netCenter-${color})`} style={{ filter: `drop-shadow(0 0 8px ${color})` }} />
    </g>
  </IconBase>
);

export const Activity3D = ({ color }: { color: string }) => (
  <IconBase color={color}>
    <defs>
      <linearGradient id={`gearBody-${color}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#444" />
        <stop offset="50%" stopColor="#111" />
        <stop offset="100%" stopColor="#000" />
      </linearGradient>
    </defs>
    <g transform="translate(50, 50)">
      {/* The Gear */}
      <g className="animate-spin-slow" style={{ animationDuration: '10s', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }}>
        <path d="M -18 -4 L -24 -6 L -24 -12 L -18 -14 L -16 -20 L -10 -24 L -4 -18 L 4 -18 L 10 -24 L 16 -20 L 18 -14 L 24 -12 L 24 -6 L 18 -4 L 20 4 L 24 10 L 20 16 L 14 18 L 12 24 L 6 24 L 4 18 L -4 18 L -6 24 L -12 24 L -14 18 L -20 16 L -24 10 L -20 4 Z" fill={`url(#gearBody-${color})`} stroke="#000" strokeWidth="1" />
        <circle cx="0" cy="0" r="10" fill="#0A111A" />
        {/* Inner glowing ring */}
        <circle cx="0" cy="0" r="8" fill="none" stroke={color} strokeWidth="2" style={{ filter: `drop-shadow(0 0 5px ${color})` }} />
      </g>
      {/* Transformation arrow emerging from center */}
      <path d="M -5 5 L 5 -5 M 0 -5 L 5 -5 L 5 0" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: `drop-shadow(0 0 2px ${color})` }} />
    </g>
  </IconBase>
);
