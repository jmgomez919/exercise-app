import { useState } from 'react';

function RepetitionExercise({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
      {/* "Reps" label makes the counter's purpose obvious at a glance */}
      <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: '0 0 0.25rem' }}>
        Reps
      </p>

      <p style={{ fontSize: '5rem', fontWeight: 'bold', margin: '0 0 2rem', lineHeight: 1 }}>
        {count}
      </p>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <button
          onClick={() => setCount((c) => c + 1)}
          style={{
            padding: '0.75rem 2rem',
            borderRadius: '8px',
            border: 'none',
            background: '#3b82f6',
            color: '#fff',
            fontWeight: 600,
          }}
        >
          Increment
        </button>

        <button
          onClick={() => setCount(0)}
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

export default RepetitionExercise;
