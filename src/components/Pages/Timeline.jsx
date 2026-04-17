import { useEffect, useState } from "react";
import { HiPhone, HiChatBubbleLeftEllipsis, HiVideoCamera } from "react-icons/hi2";

export default function Timeline() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
   
    const data = JSON.parse(localStorage.getItem("timeline_history") || "[]");
    setHistory(data);
  }, []);

  
  const renderIcon = (type) => {
    if (type === "call") return <HiPhone className="text-2xl text-gray-700" />;
    if (type === "text") return <HiChatBubbleLeftEllipsis className="text-2xl text-gray-700" />;
    if (type === "video") return <HiVideoCamera className="text-2xl text-gray-700" />;
    return null;
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Timeline</h1>
      
      <div className="space-y-4">
        {history.length === 0 ? (
          <p className="text-gray-500">No interactions logged yet.</p>
        ) : (
          history.map((item) => (
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