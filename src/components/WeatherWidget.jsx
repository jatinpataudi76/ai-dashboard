import React, { useState } from 'react'
import { Sun, Cloud, CloudRain, Wind, Droplets } from 'lucide-react'

const weatherData = {
  city: 'New Delhi',
  temp: 32,
  condition: 'Sunny',
  humidity: 45,
  wind: 12,
  forecast: [
    { day: 'Mon', temp: 32, icon: 'sun' },
    { day: 'Tue', temp: 28, icon: 'cloud' },
    { day: 'Wed', temp: 25, icon: 'rain' },
    { day: 'Thu', temp: 30, icon: 'sun' },
    { day: 'Fri', temp: 27, icon: 'cloud' },
  ]
}

function WeatherIcon({ type, size = 20 }) {
  if (type === 'sun') return <Sun size={size} color="#f5a623" />
  if (type === 'cloud') return <Cloud size={size} color="#8888aa" />
  if (type === 'rain') return <CloudRain size={size} color="#5c9cff" />
  return <Sun size={size} color="#f5a623" />
}

export default function WeatherWidget() {
  const [weather] = useState(weatherData)

  return (
    <div className="card">
      <h2>🌤️ Weather</h2>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <WeatherIcon type="sun" size={48} />
        <div style={{ fontSize: '42px', fontWeight: '700', margin: '8px 0' }}>
          {weather.temp}°C
        </div>
        <div style={{ fontSize: '15px', color: '#8888aa' }}>
          {weather.condition} — {weather.city}
        </div>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '20px',
        padding: '12px',
        background: '#0f0f13',
        borderRadius: '8px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <Droplets size={16} color="#5c9cff" />
          <div style={{ fontSize: '13px', marginTop: '4px' }}>{weather.humidity}%</div>
          <div style={{ fontSize: '11px', color: '#8888aa' }}>Humidity</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Wind size={16} color="#8888aa" />
          <div style={{ fontSize: '13px', marginTop: '4px' }}>{weather.wind} km/h</div>
          <div style={{ fontSize: '11px', color: '#8888aa' }}>Wind</div>
        </div>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '6px'
      }}>
        {weather.forecast.map((item) => (
          <div key={item.day} style={{
            flex: 1,
            textAlign: 'center',
            padding: '8px 4px',
            background: '#0f0f13',
            borderRadius: '8px'
          }}>
            <div style={{ fontSize: '11px', color: '#8888aa', marginBottom: '6px' }}>
              {item.day}
            </div>
            <WeatherIcon type={item.icon} size={16} />
            <div style={{ fontSize: '12px', marginTop: '4px' }}>
              {item.temp}°
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}