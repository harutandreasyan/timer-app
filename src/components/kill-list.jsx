import { KillItem } from "./kill-item";

export const KillList = ({ killed, onRestore }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-md shadow-lg border border-gray-700">
      <h2 className="text-white text-lg font-semibold mb-4">Killed Timers</h2>
      <table className="w-full text-left text-sm text-gray-300 border-collapse border border-gray-700">
        <thead className="bg-gray-700">
          <tr>
            <th className="px-4 py-2 border border-gray-600">ID</th>
            <th className="px-4 py-2 border border-gray-600">Time Start</th>
            <th className="px-4 py-2 border border-gray-600">Time End</th>
            <th className="px-4 py-2 border border-gray-600">Overall Duration</th>
            <th className="px-4 py-2 border border-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-600">
          {killed.map(item => (
            <KillItem
              key={item.id}
              {...item}
              onRestore={onRestore}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
