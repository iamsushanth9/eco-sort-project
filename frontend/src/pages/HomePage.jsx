import React from 'react';
import { Link } from 'react-router-dom';
import { Upload, BookOpen, ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2547565/pexels-photo-2547565.jpeg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-800/60 to-slate-900/80"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Tagline */}
            <div className="mb-6 inline-block">
              <span className="text-green-400 font-semibold text-sm tracking-widest uppercase">Join 50,000+ eco-warriors</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-2 leading-tight">
              <span className="text-white">Transform Plastic</span>
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-green-400">IntoTomorrow</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl mb-10 text-gray-300 leading-relaxed max-w-2xl">
              Every piece of plastic you sort creates ripples of change. Join our mission to revolutionize waste management and build a sustainable future for generations to come.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <Link
                to="/upload"
                className="group inline-flex items-center px-8 py-4 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                
                Upload Your Plastic
                <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">2.5M</div>
                <div className="text-sm text-gray-400">Kg Plastic Recycled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">180+</div>
                <div className="text-sm text-gray-400">Countries Reached</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">50K</div>
                <div className="text-sm text-gray-400">Active Sorters</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">98%</div>
                <div className="text-sm text-gray-400">Recycling Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-16">
            How EcoSort Helps You Recycle
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            {
              icon: <Upload className="h-8 w-8 text-green-600 dark:text-green-400" />,
              title: "Upload & Identify",
              description: "Take a photo of any plastic item and our AI will identify its type and recyclability within seconds.",
              link: "/upload",
              color: "green"
            },
            {
              icon: <BookOpen className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
              title: "Learn About Plastics",
              description: "Educate yourself about different plastic types, their environmental impact, and best recycling practices.",
              link: "/education",
              color: "purple"
            }].
            map((feature, index) =>
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl"
              style={{ animationDelay: `${index * 200}ms` }}>
              
                <div className={`bg-${feature.color}-100 dark:bg-${feature.color}-900 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <Link
                to={feature.link}
                className={`inline-flex items-center text-${feature.color}-600 dark:text-${feature.color}-400 hover:text-${feature.color}-700 dark:hover:text-${feature.color}-300 group-hover:gap-2 transition-all duration-300`}>
                
                  Try it now <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 animate-pulse-slow"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full translate-x-1/2 translate-y-1/2 animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of users who are making smarter recycling decisions with EcoSort. 
            Every plastic item correctly recycled helps reduce environmental impact.
          </p>
          <Link
            to="/upload"
            className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            
            Start Recycling Smarter
            <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </section>
    </Layout>);

};

export default HomePage;