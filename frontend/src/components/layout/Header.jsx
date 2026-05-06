import React from 'react';
import { Recycle, Moon, Sun, Menu, X, LogIn, LogOut, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm transition-colors duration-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 text-green-600 dark:text-green-400 transition-colors duration-200">
          
          <Recycle size={32} />
          <span className="text-xl font-bold">EcoSort</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">
            
            Home
          </Link>
          <Link
            to="/upload"
            className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">
            
            Upload
          </Link>
          <Link
            to="/education"
            className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">
            
            Learn
          </Link>
          {user ?
          <>
              <span className="flex items-center text-gray-700 dark:text-gray-200 font-medium">
                <User className="h-5 w-5 mr-1 text-green-600 dark:text-green-400" />
                {user.username}
              </span>
              <button
              onClick={handleLogout}
              className="flex items-center gap-1 px-3 py-1 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-colors duration-200">
              
                <LogOut className="h-4 w-4" /> Logout
              </button>
            </> :

          <Link
            to="/login"
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-green-600 hover:bg-green-700 text-white transition-colors duration-200">
            
              <LogIn className="h-4 w-4" /> Login
            </Link>
          }
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-colors duration-200"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}>
            
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          aria-label="Toggle menu">
          
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen &&
      <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg transition-colors duration-200">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <Link
            to="/"
            className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 py-2 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}>
            
              Home
            </Link>
            <Link
            to="/upload"
            className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 py-2 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}>
            
              Upload
            </Link>
            <Link
            to="/education"
            className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 py-2 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}>
            
              Learn
            </Link>
            {user ?
          <>
                <span className="flex items-center text-gray-700 dark:text-gray-200 font-medium py-2">
                  <User className="h-5 w-5 mr-1 text-green-600 dark:text-green-400" />
                  {user.username}
                </span>
                <button
              onClick={() => {handleLogout();setIsMenuOpen(false);}}
              className="flex items-center gap-1 px-3 py-1 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-colors duration-200 mb-2">
              
                  <LogOut className="h-4 w-4" /> Logout
                </button>
              </> :

          <Link
            to="/login"
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-green-600 hover:bg-green-700 text-white transition-colors duration-200 mb-2"
            onClick={() => setIsMenuOpen(false)}>
            
                <LogIn className="h-4 w-4" /> Login
              </Link>
          }
            <div className="flex items-center py-2">
              <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-colors duration-200"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}>
              
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <span className="ml-3 text-gray-700 dark:text-gray-200">
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </span>
            </div>
          </div>
        </div>
      }
    </header>);

};

export default Header;