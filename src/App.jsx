import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import Home from './components/Pages/Home';
import FriendDetails from './components/Pages/FriendDetails';
import Timeline from './components/Pages/Timeline';
import Stats from './components/Pages/Stats';
import NotFound from './components/Pages/NotFound';

function App() {
  return (
    <div className="flex flex-col : min-h-screen bg-slate-50">
      <Toaster position="top-center" />
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/friend/:id" element={<FriendDetails />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/stats" element={<Stats />} />
        
          <Route path="*" element={
            <div className="flex flex-col items-center justify-center py-20">
              <h1 className="text-6xl font-bold text-teal-800 italic">404</h1>
              <p className="text-xl text-gray-500 mt-4">Oops! This page doesn't exist.</p>
            </div>
          } />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;