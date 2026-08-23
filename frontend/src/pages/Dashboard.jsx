import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('safety_user');
    const token = localStorage.getItem('safety_token');
    
    if (!token || !storedUser) {
      navigate('/');
      return;
    }
    
    try {
      setUser(JSON.parse(storedUser));
    } catch (e) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('safety_token');
    localStorage.removeItem('safety_user');
    navigate('/');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#f4f6f9] font-sans">
      {/* Top thin yellow bar */}
      <div className="h-1 bg-[#d9a92a] w-full"></div>
      
      {/* Header */}
      <header className="bg-white shadow-sm px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 gap-4 sm:gap-0">
        <div className="flex items-center space-x-3 sm:space-x-4 w-full sm:w-auto justify-center sm:justify-start">
          {/* Logo Placeholder */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-10 sm:h-10 text-blue-900">
              <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#fff"/>
              <path d="M12 22V2M4 5L12 2L20 5M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="3" fill="#d9a92a"/>
            </svg>
          </div>
          <h1 className="text-[18px] sm:text-[22px] font-bold text-[#1e3a8a] tracking-wide m-0 text-center sm:text-left">ASSESSMENT PORTAL</h1>
        </div>
        
        <div className="flex items-center space-x-3 sm:space-x-6 w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex items-center space-x-2 text-gray-700 bg-gray-50 px-2 sm:px-3 py-1 sm:py-1.5 rounded border border-gray-100 flex-1 sm:flex-none justify-center overflow-hidden">
            <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <span className="text-xs sm:text-sm font-medium truncate">{user.email || 'admin@test.com'}</span>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center space-x-1 sm:space-x-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded transition-colors text-xs sm:text-sm font-medium shadow-sm flex-shrink-0"
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
            </svg>
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="space-y-4 sm:space-y-6">
          {/* Generated Assessment Links */}
          <section className="bg-white rounded shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 bg-gray-50">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800">Generated Assessment Links</h2>
            </div>
            <div className="p-4 sm:p-6">
              <ul className="divide-y divide-gray-100">
                <li className="py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-900">ICTWHS201 - Provide telecommunications services safely on roofs</p>
                      <p className="text-xs text-gray-500">First Question / Cover Page</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => navigate('/assessment')}
                    className="ml-4 flex-shrink-0 bg-blue-50 hover:bg-blue-100 text-blue-600 px-3 py-1.5 rounded text-sm font-medium transition-colors border border-blue-200"
                  >
                    Open
                  </button>
                </li>
                <li className="py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-900">MSMWHS217 - Gas test Atmosphere</p>
                      <p className="text-xs text-gray-500">Second Question / Cover Page</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => navigate('/gas-test-assessment')}
                    className="ml-4 flex-shrink-0 bg-blue-50 hover:bg-blue-100 text-blue-600 px-3 py-1.5 rounded text-sm font-medium transition-colors border border-blue-200"
                  >
                    Open
                  </button>
                </li>
              </ul>
            </div>
          </section>

          {/* Common Assessment Links */}
          <section className="bg-white rounded shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 bg-gray-50">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800">Common Assessment Links</h2>
            </div>
            <div className="p-4 sm:p-6">
              <p className="text-gray-500 text-sm">No common links available.</p>
            </div>
          </section>

          {/* Recent Submissions */}
          <section className="bg-white rounded shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 bg-gray-50">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800">Recent Submissions</h2>
            </div>
            <div className="p-4 sm:p-6">
              <p className="text-gray-500 text-sm">No recent submissions found.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
