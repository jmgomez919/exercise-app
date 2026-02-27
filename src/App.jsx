import { useState } from 'react';
import ExerciseMenu from './components/ExerciseMenu';
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  // Screen A — menu
  if (!selectedExercise) {
    return <ExerciseMenu onSelect={setSelectedExercise} />;
  }

  // Screen B — exercise screen
  return (
    <div style={{ padding: '2rem', maxWidth: '420px', margin: '0 auto' }}>
      <button
        onClick={() => setSelectedExercise(null)}
        style={{ marginBottom: '1.5rem', cursor: 'pointer' }}
      >
        ← Back to Menu
      </button>

      <h2>{selectedExercise.name}</h2>

      {selectedExercise.type === 'repetition' ? (
        <RepetitionExercise name={selectedExercise.name} />
      ) : (
        <DurationExercise name={selectedExercise.name} />
      )}
    </div>
  );
}

export default App;
