
export default function Footer() {
  return (
    <footer className="bg-[#244d3e] text-white py-12 px-6">
 
      <div className="flex flex-col justify-center items-center text-center mb-10">
        <img src="/logo-xl.png" alt="KeenKeeper" className="mb-4" />
        <p className="text-white text-sm mt-2 max-w-md">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
      </div>

      <div className="flex flex-col items-center mb-10">
        <h3 className="text-lg font-semibold mb-4">Social Links</h3>
        <div className="flex gap-4">
          <a href="#" className="hover:opacity-80 transition-opacity">
            <img
              src="/instagram.png"
              alt="Instagram"
              className="w-10 h-10"
            />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <img
              src="/facebook.png"
              alt="Facebook"
              className="w-10 h-10"
            />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <img
              src="/twitter.png"
              alt="Twitter"
              className="w-10 h-10"
            />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-300">
        <p>© 2026 KeenKeeper. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}
