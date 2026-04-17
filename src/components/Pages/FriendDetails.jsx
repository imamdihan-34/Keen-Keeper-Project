import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaBoxArchive } from "react-icons/fa6";
import {
  HiPhone,
  HiChatBubbleLeftEllipsis,
  HiVideoCamera,
} from "react-icons/hi2";

export default function FriendDetails() {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  const handleCheckIn = (type) => {
    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      type: type,
      title: `${type} with ${friend.name}`,
      iconType: type.toLowerCase(),
    };

    const existingTimeline = JSON.parse(
      localStorage.getItem("timeline_history") || "[]",
    );
    const updatedTimeline = [newEntry, ...existingTimeline];
    localStorage.setItem("timeline_history", JSON.stringify(updatedTimeline));
    toast.success(`${type} entry added to timeline!`);
  };

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const foundFriend = data.find((f) => f.id === parseInt(id));
        setFriend(foundFriend);
      });
  }, [id]);

  if (!friend)
    return <p className="text-center py-10">Loading Friend Details...</p>;

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar: Profile Card */}
          <div className="space-y-4">
            <div className="bg-white p-8 shadow-sm rounded-2xl text-center">
              <img
                src={friend.picture}
                alt={friend.name}
                className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-white shadow-md"
              />
              <h2 className="text-2xl font-bold mt-4 text-gray-800">
                {friend.name}
              </h2>
              <div className="flex flex-col items-center gap-2 mt-2">
                <span className="bg-red-500 text-white px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {friend.status || "Overdue"}
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase">
                  Family
                </span>
              </div>
              <p className="italic text-gray-500 mt-4 text-sm font-medium">
                "{friend.bio}"
              </p>
              <p className="text-xs text-gray-400 mt-2">Preferred: email</p>
            </div>

            <div className="space-y-2">
              <button className="w-full py-3 bg-white border border-gray-100 shadow-sm rounded-xl flex items-center justify-center gap-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition">
                <RiNotificationSnoozeLine className="text-lg" /> Snooze 2 Weeks
              </button>
              <button className="w-full py-3 bg-white border border-gray-100 shadow-sm rounded-xl flex items-center justify-center gap-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition">
                <FaBoxArchive className="text-md" /> Archive
              </button>
              <button className="w-full py-3 bg-white border border-gray-100 shadow-sm rounded-xl flex items-center justify-center gap-3 text-sm font-semibold text-red-500 hover:bg-red-50 transition">
                <MdOutlineDeleteForever className="text-lg" /> Delete
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-6 shadow-sm rounded-xl text-center border border-gray-100">
                <h4 className="text-2xl font-bold text-[#244d3f]">
                  {friend.days_since_contact}
                </h4>
                <p className="text-[#64748B] text-xs mt-1 uppercase tracking-wide">
                  Days Since Contact
                </p>
              </div>
              <div className="bg-white p-6 shadow-sm rounded-xl text-center border border-gray-100">
                <h4 className="text-2xl font-bold text-[#244d3f] ">30</h4>
                <p className="text-[#64748B] text-xs mt-1 uppercase tracking-wide">
                  Goal (Days)
                </p>
              </div>
              <div className="bg-white p-6 shadow-sm rounded-xl text-center border border-gray-100">
                <h4 className="text-3xl font-bold text-[#244d3f]">
                  22 April 2026
                </h4>
                <p className="text-[#64748B] text-xs mt-1 uppercase tracking-wide">
                  Next Due
                </p>
              </div>
            </div>

            <div className="bg-white p-6 shadow-sm rounded-xl border border-gray-100 flex justify-between items-center">
              <div>
                <h4 className="font-bold text-emerald-800 text-lg">
                  Relationship Goal
                </h4>
                <p className="text-gray-500 text-sm mt-1">
                  Connect every{" "}
                  <span className="font-bold text-gray-800">30 days</span>
                </p>
              </div>
              <button className="bg-gray-50 px-4 py-1.5 rounded-lg text-sm font-medium border border-gray-200 text-gray-600 hover:bg-gray-100">
                Edit
              </button>
            </div>

            <div className="bg-white p-6 shadow-sm rounded-xl border border-gray-100">
              <h4 className="font-bold text-emerald-800 text-lg mb-6">
                Quick Check-In
              </h4>
              <div className="grid grid-cols-3 gap-4">
                <button
                  onClick={() => handleCheckIn("Call")}
                  className="w-full py-2 border rounded-lg flex  flex-col items-center justify-center gap-2 hover:border-emerald-200 hover:bg-emerald-50 transition group"
                >
                  <HiPhone className="text-2xl text-gray-600 group-hover:text-emerald-600" />
                  <span className="text-sm font-semibold text-gray-700">
                    Call
                  </span>
                </button>
                <button
                  onClick={() => handleCheckIn("Text")}
                  className="w-full py-2 border rounded-lg flex  flex-col items-center justify-center gap-2  hover:border-emerald-200 hover:bg-emerald-50 transition group"
                >
                  <HiChatBubbleLeftEllipsis className="text-2xl text-gray-600 group-hover:text-emerald-600" />
                  <span className="text-sm font-semibold text-gray-700">
                    Text
                  </span>
                </button>
                <button
                  onClick={() => handleCheckIn("Video")}
                  className="w-full py-2 border rounded-lg flex  flex-col items-center justify-center gap-2  hover:border-emerald-200 hover:bg-emerald-50 transition group"
                >
                  <HiVideoCamera className="text-2xl text-gray-600 group-hover:text-emerald-600" />
                  <span className="text-sm font-semibold text-gray-700">
                    Video
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
