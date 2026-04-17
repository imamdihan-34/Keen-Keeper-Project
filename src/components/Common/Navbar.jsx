import { NavLink } from "react-router-dom";
import { HiHome, HiClock, HiChartPie } from "react-icons/hi2";

export default function Navbar() {
  const menuItems = [
    { name: 'Home', path: '/', icon: <HiHome /> },
    { name: 'Timeline', path: '/timeline', icon: <HiClock /> },
    { name: 'Stats', path: '/stats', icon: <HiChartPie /> },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
      <div><img src="/src/assets/logo.png" alt="" /></div>
        <div className="flex gap-4 md:gap-6">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  isActive 
                  ? "bg-teal-900 text-white" 
                  : "text-gray-500 hover:text-teal-700 hover:bg-teal-50"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span className="hidden sm:inline">{item.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}