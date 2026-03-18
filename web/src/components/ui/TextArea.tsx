interface TextAreaProps {
  name: string
  placeholder: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export function TextArea({ name, placeholder, label, value, onChange }: TextAreaProps) {
  return (
    <div style={{ flex: 1 }}>
      <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#1a1a2e', marginBottom: '6px' }}>
        {label}
      </label>
      <textarea
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
          resize: 'none',
          height: '140px',
          boxSizing: 'border-box',
        }}
      />
    </div>
  )
}