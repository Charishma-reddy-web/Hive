import React from 'react';

interface ButtonProps {
  label: string
  onClick: () => void
  disabled?: boolean
}

export function Button({ label, onClick, disabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full md:w-auto bg-[#0a0a0a] text-white text-[15px] font-medium py-4 px-6 md:px-[80px] rounded-[8px] border-none tracking-[0.3px] transition-all duration-100 ease-in-out block ${
        disabled ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer hover:scale-[0.98] active:scale-[0.96]'
      }`}
    >
      {label}
    </button>
  )
}