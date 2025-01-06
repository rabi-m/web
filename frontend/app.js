import { getCLS, getFID, ;'getLCP } from 'web-vitals';

function App() {
    const [notes, setNotes] = useState([]);
    const [note, setNote] = useState('');

    const addNote = () => {
        setNotes([...notes, note]);
        setNote('');
    };

    return (
        <div>
            <h1>SimpleApp - Notes Manager</h1>
            <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Write a note"
            />
            <button onClick={addNote}>Add Note</button>
            <ul>
                {notes.map((n, index) => (
                    <li key={index}>{n}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;

