import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, Loader, User } from 'lucide-react';

const LoginPage: React.FC = () => {
  const { login, loading, error } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    if (!username || !password) {
      setFormError('Please enter both username and password.');
      return;
    }
    try {
      await login(username, password);
      if (!error) {
        navigate('/');
      }
    } catch (err) {
      // error handled by context
    }
  };

  return (
    <Layout showCounter={false}>
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
        <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 glass-effect animate-fadeIn">
          <div className="flex flex-col items-center mb-6">
            <LogIn className="h-10 w-10 text-green-600 dark:text-green-400 mb-2" />
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Login to PlasticWise</h1>
            <p className="text-gray-500 dark:text-gray-400 text-center mt-2">Welcome back! Please enter your credentials.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-1" htmlFor="username">Username</label>
              <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-800">
                <User className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  id="username"
                  type="text"
                  className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-100"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  autoComplete="username"
                  disabled={loading}
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-1" htmlFor="password">Password</label>
              <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-800">
                <LogIn className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  id="password"
                  type="password"
                  className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-100"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  autoComplete="current-password"
                  disabled={loading}
                />
              </div>
            </div>
            {(formError || error) && (
              <div className="text-red-500 text-sm text-center">{formError || error}</div>
            )}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 disabled:opacity-60"
              disabled={loading}
            >
              {loading ? <Loader className="animate-spin h-5 w-5" /> : <LogIn className="h-5 w-5" />}
              Login
            </button>
          </form>
          <div className="text-center mt-6 text-gray-600 dark:text-gray-400">
            Don&apos;t have an account?{' '}
            <Link to="/signup" className="text-green-600 dark:text-green-400 hover:underline">Sign up</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage; 