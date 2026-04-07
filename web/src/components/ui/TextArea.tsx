import React from 'react';

interface TextAreaProps {
  name: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export function TextArea({ name, placeholder, value, onChange }: TextAreaProps) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="block w-full h-full min-h-[140px] md:min-h-[180px] bg-white border border-[#e2e4e8] rounded-[6px] px-4 py-3 md:px-5 md:py-4 text-[14px] text-[#333] outline-none resize-none shadow-sm transition-colors focus:border-[#14F195]"
    />
  )
}