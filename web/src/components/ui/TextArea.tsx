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
      style={{
        display: 'block',
        width: '100%',
        height: '100%',
        minHeight: '120px',
        background: 'white',
        border: '1px solid #e2e4e8',
        borderRadius: '6px',
        padding: '16px 20px',
        fontSize: '14px',
        color: '#333',
        outline: 'none',
        resize: 'none',
        boxSizing: 'border-box',
        boxShadow: '0 1px 2px rgba(0,0,0,0.01)'
      }}
    />
  )
}