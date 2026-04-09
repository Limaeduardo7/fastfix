import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [fadeOut, setFadeOut] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 500);
    const hideTimer = setTimeout(() => setRemoved(true), 900);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div className={`ff-loader ${fadeOut ? 'ff-loader--out' : ''}`}>
      <div className="ff-loader__content">
        <div className="ff-loader__logo">
          <svg viewBox="0 0 24 24" width="40" height="40" fill="none" aria-hidden="true">
            <path
              d="M13 2L4.09 12.96A1 1 0 005 14.5h6.5L10 22l9.91-10.96A1 1 0 0019 9.5H12.5L13 2z"
              fill="#fff"
            />
          </svg>
        </div>
        <div className="ff-loader__brand">FLASH 64</div>
        <div className="ff-loader__bar">
          <div className="ff-loader__bar-fill" />
        </div>
      </div>

      <style>{`
        .ff-loader {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 9999;
          background: #0a0a14;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 1;
          transition: opacity 0.4s ease;
        }
        .ff-loader--out {
          opacity: 0;
          pointer-events: none;
        }
        .ff-loader__content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
        }
        .ff-loader__logo {
          width: 72px;
          height: 72px;
          border-radius: 20px;
          background: linear-gradient(135deg, #ff6b00 0%, #f59e0b 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 40px -10px rgba(255,107,0,0.5);
          animation: ff-logoIn 0.5s ease-out both;
        }
        .ff-loader__brand {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
          font-size: 0.95rem;
          font-weight: 800;
          letter-spacing: 0.25em;
          color: #fff;
          animation: ff-fadeIn 0.5s 0.1s ease-out both;
        }
        .ff-loader__bar {
          width: 140px;
          height: 2px;
          border-radius: 999px;
          background: rgba(255,255,255,0.08);
          overflow: hidden;
          animation: ff-fadeIn 0.5s 0.2s ease-out both;
        }
        .ff-loader__bar-fill {
          height: 100%;
          width: 40%;
          border-radius: 999px;
          background: linear-gradient(90deg, transparent, #ff6b00, transparent);
          animation: ff-slide 1.2s ease-in-out infinite;
        }
        @keyframes ff-logoIn {
          0%   { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes ff-fadeIn {
          0%   { opacity: 0; transform: translateY(6px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes ff-slide {
          0%   { transform: translateX(-120%); }
          100% { transform: translateX(360%); }
        }
      `}</style>
    </div>
  );
}
