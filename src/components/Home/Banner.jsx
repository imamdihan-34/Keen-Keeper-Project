import { Plus } from "lucide-react";

export default function Banner() {
  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold">Friends to keep close in your life</h1>
      <p className="text-gray-500 mt-2">Your personal list of meaningful connections</p>

      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded flex gap-2 mx-auto">
        <Plus size={18}/> Add a Friend
      </button>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {["Total Friends","On Track","Need Attention","Interactions"].map((item,i)=>(
          <div key={i} className="bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-bold">10</h2>
            <p className="text-gray-500">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
