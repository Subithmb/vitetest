import React from 'react'

const rows = new Array(7).fill({
  position: 'Camera 1 (Video)',
  time: '9 am - 7 pm',
  info: 'LP default',
  quantity: 20,
})

const PositionTable = () => {
  return (
    <div className="bg-[#1f1d38] rounded-lg p-4 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-3">Positions</h2>
      <table className="w-full text-sm">
        <thead className="text-left text-pink-400 border-b border-pink-600">
          <tr>
            <th className="py-2">Position</th>
            <th>Time</th>
            <th>Info</th>
            <th>Quantity</th>
            <th>Contractor</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {rows.map((row, idx) => (
            <tr key={idx} className="border-b border-[#2c294a]">
              <td className="py-2">{row.position}</td>
              <td>{row.time}</td>
              <td>{row.info}</td>
              <td>{row.quantity}</td>
              <td>
                <select className="bg-[#2c294a] text-white p-1 rounded">
                  <option>Select Contractor</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PositionTable