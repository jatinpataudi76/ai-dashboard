import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import TaskManager from './components/TaskManager'
import NotesPanel from './components/NotesPanel'
import CalendarWidget from './components/CalendarWidget'
import WeatherWidget from './components/WeatherWidget'
import AIAssistant from './components/AIAssistant'
import './App.css'

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="layout">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main">
        <div className="grid">
          <TaskManager />
          <NotesPanel />
          <AIAssistant />
          <CalendarWidget />
          <WeatherWidget />
        </div>
      </div>
    </div>
  )
}