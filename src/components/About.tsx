
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate full-stack developer with over 3 years of experience creating 
              digital solutions that make a difference. I love turning complex problems into 
              simple, beautiful, and intuitive designs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or enjoying a good cup of coffee while planning my next project.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                <p className="text-gray-600">3+ Years</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Projects</h4>
                <p className="text-gray-600">50+ Completed</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                <p className="text-gray-600">San Francisco, CA</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Status</h4>
                <p className="text-green-600 font-semibold">Available</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=600&fit=crop" 
              alt="Working on laptop" 
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
              <p className="font-semibold">Always Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
