import { useState } from 'react';

function RepetitionExercise({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h3 style={{ marginBottom: '1.5rem' }}>{name}</h3>

      <p style={{ fontSize: '4rem', fontWeight: 'bold', margin: '0 0 1.5rem' }}>
        {count}
      </p>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <button
          onClick={() => setCount((c) => c + 1)}
          style={{
            padding: '0.75rem 2rem',
            fontSize: '1rem',
            cursor: 'pointer',
            borderRadius: '8px',
            border: 'none',
            background: '#3b82f6',
            color: '#fff',
          }}
        >
          Increment
        </button>

        <button
          onClick={() => setCount(0)}
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

export default RepetitionExercise;
