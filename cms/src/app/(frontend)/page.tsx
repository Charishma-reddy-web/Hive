export default function CmsHomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: '24px',
      }}
    >
      <div
        style={{
          maxWidth: '640px',
          width: '100%',
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '24px',
          padding: '32px',
        }}
      >
        <p style={{ margin: 0, color: '#0891b2', fontWeight: 600 }}>NurtureHive CMS</p>
        <h1 style={{ marginTop: '16px', marginBottom: '12px', fontSize: '2rem' }}>
          Payload is ready.
        </h1>
        <p style={{ margin: 0, lineHeight: 1.7, color: '#475569' }}>
          Open the admin panel to create your first user and start defining collections after deployment.
        </p>
        <a
          href="/admin"
          style={{
            display: 'inline-block',
            marginTop: '24px',
            background: '#0f172a',
            color: '#ffffff',
            padding: '12px 20px',
            borderRadius: '999px',
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          Open admin
        </a>
      </div>
    </main>
  )
}
