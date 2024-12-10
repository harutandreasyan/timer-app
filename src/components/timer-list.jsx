import { Timer } from "./timer"

export const TimerList = ({ timers, onDelete }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-md shadow-md">
      {timers.map((timer) => (
        <Timer key={timer.id} id={timer.id} onDelete={onDelete} />
      ))}
    </div>
  )
}

