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
      style={{
        display: 'block',
        width: '100%',
        background: 'white',
        border: '1px solid #e2e4e8',
        borderRadius: '6px',
        padding: '16px 20px', 
        fontSize: '14px',
        color: '#333',
        outline: 'none',
        boxSizing: 'border-box',
        boxShadow: '0 1px 2px rgba(0,0,0,0.01)'
      }}
    />
  )
}