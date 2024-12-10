export const KillItem = ({ id, timeStart, timeEnd, onRestore }) => {
  const formatTime = (time) => {
    const date = new Date(time);
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const duration = timeEnd
    ? Math.floor((new Date(timeEnd) - new Date(timeStart)) / 1000)
    : 'N/A';

  return (
    <tr className="hover:bg-gray-800 text-gray-300 border-b border-gray-600">
      <td className="px-4 py-2 border border-gray-600">{id}</td>
      <td className="px-4 py-2 border border-gray-600">{formatTime(timeStart)}</td>
      <td className="px-4 py-2 border border-gray-600">{timeEnd ? formatTime(timeEnd) : 'N/A'}</td>
      <td className="px-4 py-2 border border-gray-600">{duration}s</td>
      <td className="px-4 py-2 border border-gray-600">
        <button
          onClick={() => onRestore(id)}
          className="bg-green-600 hover:bg-green-500 text-white px-3 py-1 rounded-md transition duration-200"
        >
          Restore
        </button>
      </td>
    </tr>
  );
};
