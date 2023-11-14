import React from 'react';

const Resources: React.FC = () => {
  return (
    <div id="resources" className="section bg-gray-100 p-8">
      <hr className="border-t border-gray-600 my-8" />
      <div className="invisible-placeholder"></div>

      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Resources
      </h2>
      <p className="text-lg text-gray-600 mb-8 text-center">
        A collection of resources curated for professional dancers to help you transition into your next career.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* First Column */}
        <div className="bg-white p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Dance Organizations</h3>
          <ul className="list-disc ml-6">
            <li>Entertainment Community Fund</li>
            <li>Dance/USA</li>
            <li>Dance/NYC</li>
            {/* Add more organizations */}
          </ul>
        </div>

        {/* Second Column */}
        <div className="bg-white p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Education and Upskilling</h3>
          <ul className="list-disc ml-6">
            <li>Online Courses</li>
            <li>Workshops</li>
            {/* Add more education resources */}
          </ul>
        </div>

        {/* Third Column */}
        <div className="bg-white p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Jobs for Dancers</h3>
          <ul className="list-disc ml-6">
            <li>Job Portals</li>
            <li>Freelance Opportunities</li>
            {/* Add more job-related resources */}
          </ul>
        </div>

        {/* Add more columns as needed */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {/* Fourth Column */}
        <div className="bg-white p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Mentorship</h3>
          <ul className="list-disc ml-6">
            <li>Mentorship Programs</li>
            <li>Industry Mentors</li>
            {/* Add more mentorship resources */}
          </ul>
        </div>

        {/* Fifth Column */}
        <div className="bg-white p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Mental Health Support</h3>
          <ul className="list-disc ml-6">
            <li>Counseling Services</li>
            <li>Support Groups</li>
            {/* Add more mental health resources */}
          </ul>
        </div>

        {/* Fifth Column */}
        <div className="bg-white p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Inspiration</h3>
          <ul className="list-disc ml-6">
            <li>Success Stories</li>
            <li>Motivational Quotes</li>
            <li>Creative Pursuits</li>
            {/* Add more mental health resources */}
          </ul>
        </div>

        {/* Add more columns as needed */}
      </div>
    </div>
  );
};

export default Resources;
