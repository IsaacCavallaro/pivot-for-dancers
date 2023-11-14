import React from 'react';

const Community: React.FC = () => {
  return (
    <div id="community" className="section bg-blue-900 text-white p-8">
      <h2 className="text-3xl font-bold mb-6">
        Community
      </h2>
      <p className="text-lg mb-8">
        Dancers, you’re not alone. We’ve built a community of your fellow dancers to support you through your career pivot. Our mission is to change the conversation around career transitions and let go of the taboo. Join the community and share your voice.
      </p>
      <div className="community-links grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[
          { platform: 'Instagram', link: '#' },
          { platform: 'Email List', link: '#' },
          { platform: 'Facebook', link: '#' },
          { platform: 'YouTube', link: 'https://www.youtube.com/@pivotfordancers8979' },
          { platform: 'LinkedIn', link: '#' },
          // Add more community links as needed
        ].map((item, index) => (
          <div key={index} className="community-item">
            <p className="font-semibold mb-2">{item.platform}</p>
            <span>{item.platform === 'Email List' ? 'Subscribe to receive regular updates via email.' : 'Follow us for updates.'}</span>
            <a href={item.link} target="_blank" rel="noopener noreferrer">Go {item.platform}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
