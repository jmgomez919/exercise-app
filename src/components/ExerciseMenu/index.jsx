const EXERCISES = [
  { name: 'Push-ups',   type: 'repetition' },
  { name: 'Squats',     type: 'repetition' },
  { name: 'Pull-ups',   type: 'repetition' },
  { name: 'Sit-ups',    type: 'repetition' },
  { name: 'Plank',      type: 'duration' },
  { name: 'Wall Sit',   type: 'duration' },
  { name: 'Jump Rope',  type: 'duration' },
  { name: 'Running',    type: 'duration' },
];

const tagColors = {
  repetition: '#3b82f6',
  duration:   '#10b981',
};

function ExerciseMenu({ onSelect }) {
  return (
    <div style={{ padding: '2rem', maxWidth: '420px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '0.25rem' }}>Exercise Tracker</h1>
      <p style={{ color: '#888', marginBottom: '1.5rem' }}>Select an exercise to begin</p>

      {EXERCISES.map((exercise) => (
        <button
          key={exercise.name}
          onClick={() => onSelect(exercise)}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            padding: '0.85rem 1rem',
            marginBottom: '0.6rem',
            fontSize: '1rem',
            cursor: 'pointer',
            borderRadius: '8px',
            border: '1px solid #ddd',
            background: '#fff',
            textAlign: 'left',
          }}
        >
          <span>{exercise.name}</span>
          <span style={{
            fontSize: '0.7rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#fff',
            background: tagColors[exercise.type],
            padding: '2px 8px',
            borderRadius: '99px',
          }}>
            {exercise.type}
          </span>
        </button>
      ))}
    </div>
  );
}

export default ExerciseMenu;
