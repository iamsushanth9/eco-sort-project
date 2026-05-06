import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { mockRecyclingCenters } from '../data/mockData';
import { PlasticType } from '../types';
import { MapPin, Phone, Globe, Search } from 'lucide-react';

const CentersPage = () => {
  const [filterType, setFilterType] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCenters = mockRecyclingCenters.filter((center) => {
    const matchesType = filterType === 'ALL' || center.acceptedTypes.includes(filterType);
    const matchesSearch = center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    center.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Recycling Centers
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find local recycling facilities that accept various types of plastic waste. Filter by plastic type to find the nearest center that accepts your specific plastic.
          </p>
        </div>
        
        {/* Search and Filter Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search centers by name or address..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200" />
            
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setFilterType('ALL')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              filterType === 'ALL' ?
              'bg-green-500 text-white shadow-md' :
              'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`
              }>
              
              All Types
            </button>
            {Object.values(PlasticType).map((type) =>
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              filterType === type ?
              'bg-green-500 text-white shadow-md' :
              'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`
              }>
              
                {type.split(' ')[0]}
              </button>
            )}
          </div>
        </div>

        {/* Centers List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredCenters.map((center) =>
          <div
            key={center.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
            
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                  {center.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex items-start">
                  <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-green-500" />
                  {center.address}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-sm mb-2 text-gray-700 dark:text-gray-300">
                    Accepted Types:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {center.acceptedTypes.map((type) =>
                  <span
                    key={type}
                    className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs rounded-full">
                    
                        {type.split(' ')[0]}
                      </span>
                  )}
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  {center.phone &&
                <a
                  href={`tel:${center.phone}`}
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200">
                  
                      <Phone className="w-4 h-4 mr-2" />
                      {center.phone}
                    </a>
                }
                  
                  {center.website &&
                <a
                  href={center.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200">
                  
                      <Globe className="w-4 h-4 mr-2" />
                      Visit Website
                    </a>
                }
                </div>
              </div>
            </div>
          )}
        </div>

        {filteredCenters.length === 0 &&
        <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No recycling centers found matching your criteria.
            </p>
          </div>
        }
      </div>
    </Layout>);

};

export default CentersPage;