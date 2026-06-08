import React from 'react';
import {
  SiHubspot,
  SiSalesforce,
  SiGoogleanalytics,
  SiOpenai,
  SiGooglecloud,
  SiSemrush,
  SiDatabricks,
  SiSnowflake,
  SiFigma,
  SiStripe,
  SiVercel
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';

const BrandWrapper = ({ children, color }: { children: React.ReactNode, color: string }) => (
  <div className="relative flex items-center justify-center w-full h-full shrink-0 group">
    {/* Dynamic Ambient Glow */}
    <div className="absolute inset-0 rounded-full opacity-[0.25] blur-[14px] transition-all duration-500 group-hover:scale-125 group-hover:opacity-[0.4]" style={{ backgroundColor: color }} />
    
    {/* 3D Stacking Container */}
    <div className="relative w-[85%] h-[85%] transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-105">
      
      {/* Shadow Layer */}
      <div className="absolute inset-0 flex items-center justify-center text-black opacity-60 translate-y-[5px] blur-[3px]">
        {children}
      </div>

      {/* Extrusion Base (Darkest) */}
      <div className="absolute inset-0 flex items-center justify-center translate-y-[3px]" style={{ color: color, filter: 'brightness(0.3) saturate(1.5)' }}>
        {children}
      </div>
      
      {/* Extrusion Mid (Dark) */}
      <div className="absolute inset-0 flex items-center justify-center translate-y-[2px]" style={{ color: color, filter: 'brightness(0.5)' }}>
        {children}
      </div>

      {/* Extrusion Upper (Medium) */}
      <div className="absolute inset-0 flex items-center justify-center translate-y-[1px]" style={{ color: color, filter: 'brightness(0.7)' }}>
        {children}
      </div>
      
      {/* Top Face (Crystal Clear, No blurring shadows) */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ 
        color: color, 
        filter: `drop-shadow(0 -1px 0 rgba(255,255,255,0.4)) drop-shadow(0 1px 0 rgba(0,0,0,0.8)) brightness(1.2)` 
      }}>
        {children}
      </div>
      
    </div>
  </div>
);

// We'll wrap the React Icons to have 100% width/height and inherit color
const withBrand = (Icon: React.FC<{className?: string}>, color: string) => () => (
  <BrandWrapper color={color}>
    <Icon className="w-full h-full" />
  </BrandWrapper>
);

export const IconHubSpot = withBrand(SiHubspot, "#FF7A59");
export const IconSalesforce = withBrand(SiSalesforce, "#00A1E0");
export const IconGA4 = withBrand(SiGoogleanalytics, "#F9AB00");
export const IconOpenAI = withBrand(SiOpenai, "#10A37F");
export const IconAWS = withBrand(FaAws, "#FF9900");
export const IconAzure = withBrand(VscAzure, "#0089D6");
export const IconGCP = withBrand(SiGooglecloud, "#4285F4");
export const IconSemrush = withBrand(SiSemrush, "#FF642D");
export const IconDatabricks = withBrand(SiDatabricks, "#FF3621");
export const IconSnowflake = withBrand(SiSnowflake, "#29B5E8");
export const IconFigma = withBrand(SiFigma, "#F24E1E");
export const IconStripe = withBrand(SiStripe, "#635BFF");
export const IconVercel = withBrand(SiVercel, "#FFFFFF");

// For Ahrefs, Clay, and Apollo, which don't have standard react-icons easily mapped:
export const IconAhrefs = () => (
  <BrandWrapper color="#F88125">
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M 50 20 A 30 30 0 1 0 80 50 L 80 80 L 60 80 L 60 50 A 10 10 0 1 1 50 40 Z" fill="currentColor" />
    </svg>
  </BrandWrapper>
);

export const IconClay = () => (
  <BrandWrapper color="#E5E5E5">
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <polygon points="50,20 75,35 50,50 25,35" fill="currentColor" opacity="0.9" />
      <polygon points="25,35 50,50 50,80 25,65" fill="currentColor" opacity="0.6" />
      <polygon points="75,35 50,50 50,80 75,65" fill="currentColor" opacity="0.3" />
    </svg>
  </BrandWrapper>
);

export const IconApollo = () => (
  <BrandWrapper color="#6B3AFF">
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M 50 20 L 80 80 L 65 80 L 50 50 L 35 80 L 20 80 Z" fill="currentColor" />
      <circle cx="50" cy="50" r="10" fill="currentColor" />
    </svg>
  </BrandWrapper>
);

export const integrationData = [
  { name: "HubSpot", icon: IconHubSpot },
  { name: "Salesforce", icon: IconSalesforce },
  { name: "GA4", icon: IconGA4 },
  { name: "OpenAI", icon: IconOpenAI },
  { name: "AWS", icon: IconAWS },
  { name: "Azure", icon: IconAzure },
  { name: "GCP", icon: IconGCP },
  { name: "Semrush", icon: IconSemrush },
  { name: "Databricks", icon: IconDatabricks },
  { name: "Ahrefs", icon: IconAhrefs },
  { name: "Clay", icon: IconClay },
  { name: "Apollo", icon: IconApollo },
  { name: "Snowflake", icon: IconSnowflake },
  { name: "Figma", icon: IconFigma },
  { name: "Stripe", icon: IconStripe },
  { name: "Vercel", icon: IconVercel },
];
