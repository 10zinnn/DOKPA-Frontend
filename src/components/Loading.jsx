import React from 'react'

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading your adventure...</p>
      <style>{`
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 60vh;
          gap: var(--s-6);
        }

        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 4px solid var(--bg-alt);
          border-top-color: var(--accent);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .loading-container p {
          color: var(--text-muted);
          font-family: var(--font-serif);
          font-size: 1.1rem;
        }
      `}</style>
    </div>
  );
};

export default Loading;
