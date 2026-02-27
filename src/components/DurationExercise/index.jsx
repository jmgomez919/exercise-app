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

    // Cleanup: clears interval on re-run or unmount
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h3 style={{ marginBottom: '1.5rem' }}>{name}</h3>

      <p style={{ fontSize: '4rem', fontWeight: 'bold', margin: '0 0 1.5rem' }}>
        {seconds}
      </p>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        {!isRunning && (
          <button
            onClick={() => setIsRunning(true)}
            style={{
              padding: '0.75rem 2rem',
              fontSize: '1rem',
              cursor: 'pointer',
              borderRadius: '8px',
              border: 'none',
              background: '#10b981',
              color: '#fff',
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
              fontSize: '1rem',
              cursor: 'pointer',
              borderRadius: '8px',
              border: 'none',
              background: '#ef4444',
              color: '#fff',
            }}
          >
            Stop
          </button>
        )}

        <button
          onClick={handleReset}
          style={{
            padding: '0.75rem 2rem',
            fontSize: '1rem',
            cursor: 'pointer',
            borderRadius: '8px',
            border: '1px solid #ddd',
            background: '#fff',
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default DurationExercise;
