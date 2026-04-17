import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export default function Stats() {
  const [data, setData] = useState([]);

  useEffect(() => {
  
    const history = JSON.parse(localStorage.getItem("timeline_history") || "[]");


    const counts = history.reduce((acc, curr) => {
      acc[curr.type] = (acc[curr.type] || 0) + 1;
      return acc;
    }, {});

   
    const chartData = [
      { name: 'Call', value: counts['Call'] || 0, color: '#134e4a' }, // Dark Green
      { name: 'Text', value: counts['Text'] || 0, color: '#8b5cf6' }, // Purple
      { name: 'Video', value: counts['Video'] || 0, color: '#22c55e' }, // Light Green
    ];

    setData(chartData);
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Friendship Analytics</h1>

      <div className="bg-white p-8 rounded-2xl border shadow-sm max-w-4xl mx-auto">
        <h3 className="text-lg font-semibold text-gray-600 mb-6">By Interaction Type</h3>
        
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80} 
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
        {data.every(d => d.value === 0) && (
          <p className="text-center text-gray-400 mt-4">
            No interaction data available. Try calling or texting a friend first!
          </p>
        )}
      </div>
    </div>
  );
}