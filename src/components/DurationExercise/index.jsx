import { useState, useEffect, useRef } from 'react';

function DurationExercise({ name }) {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    // Cleanup on re-run or unmount to prevent stale intervals
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  // Format total seconds as MM:SS with zero-padded digits (e.g. 0 → "00:00", 75 → "01:15")
  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs    = String(seconds % 60).padStart(2, '0');
  const display = `${minutes}:${secs}`;

  return (
    <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
      <h2 style={{ marginBottom: '1.5rem', fontFamily: 'Courier New, monospace' }}>{name}</h2>

      {/* "Timer" label makes the counter's purpose obvious at a glance */}
      <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: '0 0 0.25rem' }}>
        Timer
      </p>

      <p style={{ fontSize: '5rem', fontWeight: 'bold', margin: '0 0 2rem', lineHeight: 1, fontFamily: 'Courier New, monospace' }}>
        {display}
      </p>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        {/* Start and Stop are mutually exclusive — prevents multiple intervals */}
        {!isRunning && (
          <button
            onClick={() => setIsRunning(true)}
            style={{
              padding: '0.75rem 2rem',
              borderRadius: '8px',
              border: 'none',
              background: '#10b981',
              color: '#fff',
              fontWeight: 600,
            }}
          >
            Start
          </button>
        )}

        {isRunning && (
          <button
            onClick={() => setIsRunning(false)}
            style={{
              padding: '0.75rem 2rem',
              borderRadius: '8px',
              border: 'none',
              background: '#ef4444',
              color: '#fff',
              fontWeight: 600,
            }}
          >
            Stop
          </button>
        )}

        <button
          onClick={handleReset}
          style={{
            padding: '0.75rem 2rem',
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            background: '#fff',
            color: '#374151',
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default DurationExercise;
