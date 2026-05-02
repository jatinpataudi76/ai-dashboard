import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function CalendarWidget() {
  const [date, setDate] = useState(new Date())

  const year = date.getFullYear()
  const month = date.getMonth()

  const monthNames = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ]

  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const today = new Date()

  const prevMonth = () => setDate(new Date(year, month - 1, 1))
  const nextMonth = () => setDate(new Date(year, month + 1, 1))

  const days = []
  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  return (
    <div className="card">
      <h2>📅 Calendar</h2>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px'
      }}>
        <button
          onClick={prevMonth}
          style={{ background: 'transparent', color: '#f0f0f0', padding: '4px' }}
        >
          <ChevronLeft size={18} />
        </button>

        <span style={{ fontSize: '15px', fontWeight: '600' }}>
          {monthNames[month]} {year}
        </span>

        <button
          onClick={nextMonth}
          style={{ background: 'transparent', color: '#f0f0f0', padding: '4px' }}
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '4px',
        textAlign: 'center'
      }}>
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
          <div key={d} style={{ fontSize: '12px', color: '#8888aa', padding: '4px' }}>
            {d}
          </div>
        ))}

        {days.map((day, i) => (
          <div key={i} style={{
            padding: '6px',
            borderRadius: '6px',
            fontSize: '13px',
            background: day === today.getDate() &&
              month === today.getMonth() &&
              year === today.getFullYear()
              ? '#7c5cfc' : 'transparent',
            color: day ? '#f0f0f0' : 'transparent',
            fontWeight: day === today.getDate() ? '700' : '400'
          }}>
            {day}
          </div>
        ))}
      </div>
    </div>
  )
}