import { useEffect, useState } from "react";
import Banner from "../Home/Banner";
import FriendCard from "../Home/FriendCard";

export default function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setTimeout(() => setLoading(false), 800);
      })
      .catch((err) => {
        console.error("Data fetch error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <Banner />

      <div className="container mx-auto px-4 mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Friends</h2>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-teal-600 border-solid"></div>
            <p className="mt-4 text-teal-600 font-medium">Loading friends...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {friends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        )}

        {!loading && friends.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No friends found. Add some friends to get started!
          </div>
        )}
      </div>
    </div>
  );
}
