import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import Home from './components/Pages/Home';
import FriendDetails from './components/Pages/FriendDetails';
import Timeline from './components/Pages/Timeline';
import Stats from './components/Pages/Stats';
import NotFound from './components/Pages/NotFound';

function App() {
  const location = useLocation();
  const validPaths = ["/", "/timeline", "/stats"];
  const isExist = validPaths.includes(location.pathname) || location.pathname.startsWith("/friend/");

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Toaster position="top-center" />
      <Navbar />
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/friend/:id" element={<FriendDetails />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/stats" element={<Stats />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      {isExist && <Footer />}
    </div>
  );
}

export default App;