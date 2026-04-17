import { useEffect, useState } from "react";
import { HiPhone, HiChatBubbleLeftEllipsis, HiVideoCamera } from "react-icons/hi2";

export default function Timeline() {
  const [history, setHistory] = useState([]);
  const [filter, setFilter] = useState("all");


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("timeline_history") || "[]");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHistory(data);
  }, []);

  const renderIcon = (type) => {
    if (type === "call") return <HiPhone className="text-2xl text-gray-700" />;
    if (type === "text") return <HiChatBubbleLeftEllipsis className="text-2xl text-gray-700" />;
    if (type === "video") return <HiVideoCamera className="text-2xl text-gray-700" />;
    return null;
  };

  const filteredHistory = history.filter((item) => {
    if (filter === "all") return true;
    return item.iconType === filter;
  });

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Timeline</h1>

        <select 
          className="p-2 border rounded-lg bg-white shadow-sm text-gray-600 focus:outline-none"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Filter timeline (All)</option>
          <option value="call">Calls</option>
          <option value="text">Messages/Texts</option>
          <option value="video">Videos</option>
        </select>
      </div>
      
      <div className="space-y-4">
    
        {filteredHistory.length === 0 ? (
          <div className="text-center py-10 bg-gray-50 rounded-lg border-2 border-dashed">
             <p className="text-gray-400">No recent activity. Start a call or message to see updates.</p>
          </div>
        ) : (
          filteredHistory.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4 bg-white border rounded-lg shadow-sm">
              <div className="p-3 bg-gray-100 rounded-full">
                {renderIcon(item.iconType)}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.date}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}