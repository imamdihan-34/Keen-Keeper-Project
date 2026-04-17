export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[120px] font-extrabold text-teal-800 leading-none">404</h1>
      <p className="text-xl text-gray-600 mt-4">Oops! This page doesn't exist.</p>
      <button 
        onClick={() => window.location.href = '/'}
        className="mt-8 px-6 py-2 bg-teal-700 text-white rounded-full hover:bg-teal-800 transition-all"
      >
        Back to Home
      </button>
    </div>
  );
}