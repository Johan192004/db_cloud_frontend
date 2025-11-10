import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Container from '../components/common/Container';
import Button from '../components/common/Button';

const DashboardPage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow">
        <Container>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">C</span>
              </div>
              <span className="text-2xl font-bold gradient-text">CrudCloud</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm text-gray-600 dark:text-gray-400">Welcome,</p>
                <p className="font-semibold text-gray-900 dark:text-white">{user?.username}</p>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </Container>
      </header>

      {/* Main Content */}
      <Container>
        <div className="py-12">
          {/* Welcome Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome to Your Dashboard! 🎉
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              You're successfully logged in as <span className="font-semibold text-primary-600">{user?.username}</span>
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
                {user?.role}
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-600 dark:text-gray-400">{user?.email}</span>
            </div>
          </div>

          {/* Coming Soon Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="text-4xl mb-4">🗄️</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Database Instances
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Create and manage your database instances
              </p>
              <span className="text-sm text-gray-500 dark:text-gray-500">Coming soon...</span>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Monitor performance and usage statistics
              </p>
              <span className="text-sm text-gray-500 dark:text-gray-500">Coming soon...</span>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Settings
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Manage your account and preferences
              </p>
              <span className="text-sm text-gray-500 dark:text-gray-500">Coming soon...</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl p-6 text-white">
              <div className="text-3xl font-bold mb-2">0</div>
              <div className="text-primary-100">Active Instances</div>
            </div>
            <div className="bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-xl p-6 text-white">
              <div className="text-3xl font-bold mb-2">Free</div>
              <div className="text-secondary-100">Current Plan</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl p-6 text-white">
              <div className="text-3xl font-bold mb-2">2/2</div>
              <div className="text-green-100">Available Slots</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DashboardPage;
