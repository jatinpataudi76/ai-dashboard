import React, { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'

const initialNotes = [
  { id: 1, text: 'Meeting at 3pm tomorrow' },
  { id: 2, text: 'Buy groceries after college' },
]

export default function NotesPanel() {
  const [notes, setNotes] = useState(initialNotes)
  const [input, setInput] = useState('')

  const addNote = () => {
    if (!input.trim()) return
    setNotes([...notes, { id: Date.now(), text: input }])
    setInput('')
  }

  const deleteNote = (id) => {
    setNotes(notes.filter(n => n.id !== id))
  }

  return (
    <div className="card">
      <h2>🗒️ Notes</h2>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addNote()}
          placeholder="Write a note..."
        />
        <button className="btn-primary" onClick={addNote}>
          <Plus size={16} />
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {notes.map(note => (
          <div key={note.id} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px',
            background: '#0f0f13',
            borderRadius: '8px',
          }}>
            <span style={{ flex: 1, fontSize: '14px', color: '#f0f0f0' }}>
              {note.text}
            </span>
            <button
              onClick={() => deleteNote(note.id)}
              style={{ background: 'transparent', padding: '0', color: '#ff5c5c' }}
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}