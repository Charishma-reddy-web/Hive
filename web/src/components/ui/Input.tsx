import React from 'react';

interface InputProps {
  name: string
  type: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input({ name, type, placeholder, value, onChange }: InputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="block w-full bg-white border border-[#e2e4e8] rounded-[6px] px-4 py-3 md:px-5 md:py-4 text-[14px] text-[#333] outline-none shadow-sm transition-colors focus:border-[#14F195]"
    />
  )
}