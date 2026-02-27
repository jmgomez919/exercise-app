const EXERCISES = [
  { name: 'Push-ups',  type: 'repetition' },
  { name: 'Squats',   type: 'repetition' },
  { name: 'Pull-ups', type: 'repetition' },
  { name: 'Sit-ups',  type: 'repetition' },
  { name: 'Plank',    type: 'duration' },
  { name: 'Wall Sit', type: 'duration' },
  { name: 'Jump Rope',type: 'duration' },
  { name: 'Running',  type: 'duration' },
];

// Visual accent color per exercise type
const TYPE_COLORS = {
  repetition: '#3b82f6',
  duration:   '#10b981',
};

function ExerciseMenu({ onSelect }) {
  return (
    <div style={{ padding: '2rem', maxWidth: '440px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.75rem', marginBottom: '0.25rem', fontFamily: 'Courier New, monospace' }}>Exercise Tracker</h1>
      <p style={{ color: '#6b7280', marginBottom: '1.5rem', marginTop: 0 }}>
        Select an exercise to begin
      </p>

      {EXERCISES.map((exercise) => (
        <button
          key={exercise.name}
          onClick={() => onSelect(exercise)}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            padding: '1rem 1.25rem',
            marginBottom: '0.6rem',
            background: '#fff',
            border: '2px solid #000',
            // Left accent bar indicates exercise type at a glance
            borderLeft: `4px solid ${TYPE_COLORS[exercise.type]}`,
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
            textAlign: 'left',
            fontFamily: 'Courier New, monospace',
            fontWeight: 500,
            fontSize: '1rem',
            color: '#213547',
          }}
        >
          <span>{exercise.name}</span>

          {/* Type badge */}
          <span style={{
            fontSize: '0.7rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#fff',
            background: TYPE_COLORS[exercise.type],
            padding: '3px 10px',
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
