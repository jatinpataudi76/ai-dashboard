import React from 'react'
import {
  LayoutDashboard, CheckSquare, StickyNote,
  Calendar, Cloud, Brain
} from 'lucide-react'

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'tasks', label: 'Tasks', icon: CheckSquare },
  { id: 'notes', label: 'Notes', icon: StickyNote },
  { id: 'calendar', label: 'Calendar', icon: Calendar },
  { id: 'weather', label: 'Weather', icon: Cloud },
  { id: 'ai', label: 'AI Assistant', icon: Brain },
]

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside style={{
      width: '200px',
      background: '#0d0d14',
      borderRight: '1px solid rgba(255,255,255,0.07)',
      padding: '24px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }}>
      <h1 style={{
        fontSize: '18px',
        fontWeight: '700',
        color: '#f0f0f0',
        marginBottom: '24px',
        paddingLeft: '10px'
      }}>
        FlowAI
      </h1>

      {navItems.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => setActiveTab(id)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 12px',
            borderRadius: '8px',
            background: activeTab === id ? 'rgba(124,92,252,0.2)' : 'transparent',
            color: activeTab === id ? '#f0f0f0' : '#8888aa',
            fontWeight: activeTab === id ? '600' : '400',
            fontSize: '14px',
            border: 'none',
            width: '100%',
            textAlign: 'left',
            cursor: 'pointer'
          }}
        >
          <Icon size={16} />
          {label}
        </button>
      ))}
    </aside>
  )
}