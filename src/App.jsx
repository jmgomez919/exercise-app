import { useState } from 'react';
import ExerciseMenu from './components/ExerciseMenu';
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  // Screen A — exercise menu
  if (!selectedExercise) {
    return <ExerciseMenu onSelect={setSelectedExercise} />;
  }

  // Screen B — active exercise
  return (
    <div style={{ padding: '2rem', maxWidth: '440px', margin: '0 auto' }}>
      {/* Back link — kept small so the exercise name reads as the primary heading */}
      <button
        onClick={() => setSelectedExercise(null)}
        style={{
          background: 'none',
          border: 'none',
          color: '#6b7280',
          fontSize: '0.875rem',
          padding: 0,
          marginBottom: '1rem',
          cursor: 'pointer',
        }}
      >
        ← Back to Menu
      </button>

      {selectedExercise.type === 'repetition' ? (
        <RepetitionExercise name={selectedExercise.name} />
      ) : (
        <DurationExercise name={selectedExercise.name} />
      )}
    </div>
  );
}

export default App;
