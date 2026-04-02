import Link from 'next/link'

export function SiteHeader() {
  return (
    <header className="header-outer">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        .header-outer {
          position: fixed;
          top: 30px;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          pointer-events: none;
          font-family: "Space Grotesk", sans-serif;
        }

        .header-pill {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80%;
          background-color: black;
          border-radius: 38px;
          padding: 1rem 2.5rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
          pointer-events: auto;
          transition: transform 0.3s ease;
        }

        .headGrp {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-container {
          display: flex;
          align-items: center;
          text-decoration: none;
          gap: 12px;
        }

        .logo-text {
          color: white;
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .logo-text span {
          color: #1ae9ab;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .talk-btn {
          background-color: #1ae9ab;
          color: black;
          padding: 10px 24px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          transition: transform 0.2s ease, background-color 0.2s ease;
          border: 2px solid transparent;
        }

        .talk-btn:hover {
          transform: scale(1.05);
          background-color: #16d49b;
        }

        .hamburger-menu {
          display: flex;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 5px;
        }

        .hamburger-menu span {
          display: block;
          height: 3px;
          background-color: white;
          border-radius: 2px;
          transition: width 0.3s ease;
        }

        .hamburger-menu span:nth-child(1) { width: 28px; }
        .hamburger-menu span:nth-child(2) { width: 22px; }
        .hamburger-menu span:nth-child(3) { width: 14px; align-self: flex-start; }

        @media (max-width: 768px) {
          .header-pill {
            width: 92%;
            padding: 0.8rem 1.5rem;
          }
          .logo-text { font-size: 1.2rem; }
          .talk-btn { display: none; }
        }
      `}</style>

      <div className="header-pill">
        <div className="headGrp">
          <Link href="/" className="logo-container">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 5L33 12.5V27.5L20 35L7 27.5V12.5L20 5Z" stroke="#1ae9ab" strokeWidth="2.5" />
              <path d="M20 12L27 16V24L20 28L13 24V16L20 12Z" fill="#1ae9ab" fillOpacity="0.3" stroke="#1ae9ab" strokeWidth="1.5" />
              <circle cx="20" cy="20" r="3" fill="#1ae9ab" />
            </svg>
            <span className="logo-text">Nurture <span>Hive</span></span>
          </Link>

          <div className="header-actions">
            <Link href="/#contact" className="talk-btn">Let's Talk</Link>
            
            <button className="hamburger-menu" aria-label="Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}