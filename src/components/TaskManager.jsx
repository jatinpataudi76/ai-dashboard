import React, { useState } from 'react'
import { Plus, Trash2, CheckCircle, Circle } from 'lucide-react'

const initialTasks = [
  { id: 1, text: 'Complete React project', done: false },
  { id: 2, text: 'Study for exams', done: false },
  { id: 3, text: 'Push code to GitHub', done: true },
]

export default function TaskManager() {
  const [tasks, setTasks] = useState(initialTasks)
  const [input, setInput] = useState('')

  const addTask = () => {
    if (!input.trim()) return
    setTasks([...tasks, { id: Date.now(), text: input, done: false }])
    setInput('')
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  return (
    <div className="card">
      <h2>📝 Tasks</h2>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="Add a new task..."
        />
        <button className="btn-primary" onClick={addTask}>
          <Plus size={16} />
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {tasks.map(task => (
          <div key={task.id} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px',
            background: '#0f0f13',
            borderRadius: '8px',
          }}>
            <button
              onClick={() => toggleTask(task.id)}
              style={{ background: 'transparent', padding: '0', color: task.done ? '#7c5cfc' : '#555' }}
            >
              {task.done ? <CheckCircle size={18} /> : <Circle size={18} />}
            </button>

            <span style={{
              flex: 1,
              fontSize: '14px',
              color: task.done ? '#555' : '#f0f0f0',
              textDecoration: task.done ? 'line-through' : 'none'
            }}>
              {task.text}
            </span>

            <button
              onClick={() => deleteTask(task.id)}
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