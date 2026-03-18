interface InputProps {
  name: string
  type: string
  placeholder: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input({ name, type, placeholder, label, value, onChange }: InputProps) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#1a1a2e', marginBottom: '6px' }}>
        {label}
      </label>
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
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '12px 16px',
          fontSize: '14px',
          color: '#374151',
          outline: 'none',
          boxSizing: 'border-box',
        }}
      />
    </div>
  )
}