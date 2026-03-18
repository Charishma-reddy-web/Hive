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
      style={{
        background: '#111',
        color: 'white',
        fontSize: '14px',
        fontWeight: 500,
        padding: '14px 52px',
        borderRadius: '10px',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        transition: 'background 0.2s',
      }}
    >
      {label}
    </button>
  )
}