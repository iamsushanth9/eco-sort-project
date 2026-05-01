import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, Loader, User } from 'lucide-react';

const SignupPage: React.FC = () => {
  const { signup, loading, error } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formError, setFormError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    if (!username || !password || !confirmPassword) {
      setFormError('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setFormError('Passwords do not match.');
      return;
    }
    try {
      await signup(username, password);
      navigate('/');
    } catch (err) {
      // error handled by context
    }
  };

  return (
    <Layout showCounter={false}>
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
        <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 glass-effect animate-fadeIn">
          <div className="flex flex-col items-center mb-6">
            <UserPlus className="h-10 w-10 text-green-600 dark:text-green-400 mb-2" />
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Sign Up for EcoSort</h1>
            <p className="text-gray-500 dark:text-gray-400 text-center mt-2">Create your account to get started.</p>
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
                <UserPlus className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  id="password"
                  type="password"
                  className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-100"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  autoComplete="new-password"
                  disabled={loading}
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-1" htmlFor="confirmPassword">Confirm Password</label>
              <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-800">
                <UserPlus className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  id="confirmPassword"
                  type="password"
                  className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-100"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  autoComplete="new-password"
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
              {loading ? <Loader className="animate-spin h-5 w-5" /> : <UserPlus className="h-5 w-5" />}
              Sign Up
            </button>
          </form>
          <div className="text-center mt-6 text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="text-green-600 dark:text-green-400 hover:underline">Login</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignupPage; 