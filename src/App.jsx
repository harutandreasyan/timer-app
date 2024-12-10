import { useState } from 'react'
import './App.css'
import { TimerList } from './components/timer-list'
import { KillList } from './components/kill-list'

function App() {
  const [timers, setTimers] = useState([])
  const [killed, setKilled] = useState([])

  const handleRemove = (id) => {
    const timer = timers.find(timer => timer.id === id)
    if (timer) {
      const timeEnd = new Date().toISOString();
      setTimers(timers.filter(timer => timer.id !== id))
      setKilled([...killed, { ...timer, timeEnd }])
    }
  }

  const handleRestore = (id) => {
    const timer = killed.find(item => item.id === id)
    if (timer) {
      setKilled(killed.filter(item => item.id !== id))
      setTimers([...timers, timer])
    }
  }

  return (
    <>
      <div className="p-4">
        <button
          onClick={() => setTimers([...timers, { id: Date.now(), timeStart: new Date().toISOString() }])}
          className="bg-red-300 px-4 py-2 rounded-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Create
        </button>
        <div className="flex flex-row gap-6 mt-4">
          <TimerList
            timers={timers}
            onDelete={handleRemove}
            className="flex-1 border border-gray-300 p-4 rounded-md"
          />
          <KillList
            killed={killed}
            onRestore={handleRestore}
            className="flex-1 border border-gray-300 p-4 rounded-md"
          />
        </div>
      </div>
    </>
  )
}

export default App;
