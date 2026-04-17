import { useNavigate } from "react-router-dom";

export default function FriendCard({ friend }) {
  const navigate = useNavigate();

  const statusStyles = {
    overdue: "bg-red-100 text-red-600 border-red-200",
    "almost due": "bg-yellow-100 text-yellow-600 border-yellow-200",
    "on-track": "bg-green-100 text-green-600 border-green-200",
  };

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer text-center"
    >
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-teal-50"
      />
      <h3 className="font-bold text-lg text-gray-800">{friend.name}</h3>
      <p className="text-gray-400 text-sm mb-3">
        {friend.days_since_contact}d ago
      </p>

      <div className="flex flex-wrap gap-1 justify-center mb-4">
        {friend.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] uppercase px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full font-bold"
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        className={`py-1 px-3 rounded-full text-xs font-bold inline-block border ${statusStyles[friend.status]}`}
      >
        {friend.status.toUpperCase()}
      </div>
    </div>
  );
}
