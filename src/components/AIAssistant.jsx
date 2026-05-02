import React, { useState } from 'react'
import { Send, Brain } from 'lucide-react'

const suggestions = [
  'Summarize my tasks for today',
  'What should I focus on?',
  'Give me a productivity tip',
]

const mockReplies = {
  'Summarize my tasks for today': 'You have 3 tasks today. 1 is completed, 2 are pending. Focus on completing your React project first!',
  'What should I focus on?': 'Based on your tasks, focus on your React project first as it seems most important.',
  'Give me a productivity tip': 'Try the Pomodoro technique — work for 25 mins, then take a 5 min break. It boosts focus!',
}

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    { from: 'ai', text: 'Hi! I am your AI Assistant. How can I help you today?' }
  ])
  const [input, setInput] = useState('')

  const sendMessage = (text) => {
    const userMsg = text || input
    if (!userMsg.trim()) return

    const reply = mockReplies[userMsg] ||
      'That is a great question! Let me help you stay productive today.'

    setMessages(prev => [
      ...prev,
      { from: 'user', text: userMsg },
      { from: 'ai', text: reply }
    ])
    setInput('')
  }

  return (
    <div className="card">
      <h2><Brain size={16} style={{ marginRight: '6px' }} />AI Assistant</h2>

      <div style={{
        height: '200px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginBottom: '12px'
      }}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            display: 'flex',
            justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start'
          }}>
            <div style={{
              maxWidth: '80%',
              padding: '10px 14px',
              borderRadius: '10px',
              fontSize: '13px',
              background: msg.from === 'user' ? '#7c5cfc' : '#0f0f13',
              color: '#f0f0f0',
            }}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        display: 'flex',
        gap: '6px',
        flexWrap: 'wrap',
        marginBottom: '12px'
      }}>
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => sendMessage(s)}
            style={{
              background: 'transparent',
              border: '1px solid rgba(124,92,252,0.4)',
              color: '#a088ff',
              fontSize: '11px',
              padding: '5px 10px',
              borderRadius: '20px',
              cursor: 'pointer'
            }}
          >
            {s}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Ask something..."
        />
        <button className="btn-primary" onClick={() => sendMessage()}>
          <Send size={16} />
        </button>
      </div>
    </div>
  )
}