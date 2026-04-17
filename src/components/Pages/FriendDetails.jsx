import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
export default function FriendDetails() {
  const { id } = useParams(); // URL থেকে ID নেওয়া
  const [friend, setFriend] = useState(null);
const handleCheckIn = (type) => {
  // ১. নতুন একটি টাইমলাইন অবজেক্ট তৈরি করা
  const newEntry = {
    id: Date.now(),
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    type: type, // 'Call', 'Text', বা 'Video'
    title: `${type} with ${friend.name}`,
    iconType: type.toLowerCase() 
  };

  // ২. LocalStorage থেকে আগের ডাটা আনা
  const existingTimeline = JSON.parse(localStorage.getItem("timeline_history") || "[]");

  // ৩. নতুন ডাটা শুরুতে যোগ করে আবার সেভ করা
  const updatedTimeline = [newEntry, ...existingTimeline];
  localStorage.setItem("timeline_history", JSON.stringify(updatedTimeline));

  // ৪. টোস্ট নোটিফিকেশন দেখানো (Requirement 6 & 10.3)
  toast.success(`${type} entry added to timeline!`);
};




  useEffect(() => {
    fetch("/friends.json")
      .then(res => res.json())
      .then(data => {
        // ID অনুযায়ী নির্দিষ্ট ফ্রেন্ড খুঁজে বের করা
        const foundFriend = data.find(f => f.id === parseInt(id));
        setFriend(foundFriend);
      });
  }, [id]);

  if (!friend) return <p className="text-center py-10">Loading Friend Details...</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
    
        <div className="bg-white p-6 shadow rounded-2xl text-center h-fit">
          <img src={friend.picture} className="w-32 h-32 rounded-full mx-auto border-4 border-gray-100" />
          <h2 className="text-2xl font-bold mt-4">{friend.name}</h2>
          <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase">
            {friend.status}
          </span>
          <p className="italic text-gray-500 mt-4">"{friend.bio}"</p>
          
          <div className="mt-6 space-y-2">
            <button className="w-full py-2 border rounded-lg">⏰ Snooze 2 Weeks</button>
            <button className="w-full py-2 border rounded-lg">📦 Archive</button>
            <button className="w-full py-2 border rounded-lg text-red-500">🗑️ Delete</button>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 shadow rounded-xl text-center">
              <p className="text-gray-400 text-sm">Days Since Contact</p>
              <h4 className="text-2xl font-bold">{friend.days_since_contact}</h4>
            </div>

          </div>

          <div className="bg-white p-6 shadow rounded-xl">
             <h4 className="font-bold mb-4">Quick Check-In</h4>
             <div className="grid grid-cols-3 gap-4">
                <button className="flex flex-col items-center p-4 border rounded-xl hover:bg-gray-50">📞 <span>Call</span></button>
                <button className="flex flex-col items-center p-4 border rounded-xl hover:bg-gray-50">💬 <span>Text</span></button>
                <button className="flex flex-col items-center p-4 border rounded-xl hover:bg-gray-50">📹 <span>Video</span></button>
             </div>
          </div>
        </div>
<button onClick={() => handleCheckIn("Call")}>Call</button>
<button onClick={() => handleCheckIn("Text")}>Text</button>
<button onClick={() => handleCheckIn("Video")}>Video</button>
      </div>
    </div>
  );
}