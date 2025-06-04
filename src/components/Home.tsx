import { useState, useEffect } from 'react';
import { Star, ArrowRight, Play, CheckCircle, Users } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '2.8K+', label: 'Success Stories', icon: Users },
    { number: '94%', label: 'Satisfaction Rate', icon: Star },
    { number: '127%', label: 'Avg. Salary Increase', icon: CheckCircle },
    { number: '50+', label: 'Career Paths', icon: Play }
  ];

  const iconSize = 'h-8 w-8';
  const socialMediaIconClass = `text-white p-2 rounded-full flex items-center justify-center ${iconSize}`;
  const formClass = 'flex flex-col md:flex-row items-center md:items-stretch w-full justify-center md:justify-start gap-3';
  const inputClass = `
  w-full px-4 py-4 
  text-sm text-gray-900 placeholder-gray-400 
  bg-gray-100 border border-gray-300 
  rounded-md dark:text-gray-400 
  dark:placeholder-gray-400 dark:bg-gray-700 
  dark:border-gray-700 md:w-2/3
`.trim();

  const buttonClass = `
  px-6 py-4 
  text-sm font-semibold text-gray-100 
  bg-purple-gray rounded-md 
  hover:bg-purple-gray opacity-80 hover:opacity-100 
  w-full md:w-auto
`.trim();


  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = `https://pivotfordancers.us19.list-manage.com/subscribe/post?u=be8fecbf3f1babc7628da411c&amp;id=e5d51bd2a0&amp;f_id=00c396e4f0&EMAIL=${encodeURIComponent(email)}`;
  };

  return (
    <section className="relative overflow-hidden bg-beige from-off-white via-beige/30 to-purple-gray/20 pt-20 pb-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-light-gray/20 to-purple-gray/20 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-beige/30 to-brown-gray/20 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-yellow-400 text-dark-gray font-montserrat font-semibold px-4 py-2 rounded-full">
                <Star className="w-4 h-4 mr-1 fill-current inline" />
                #1 Career Transformation Platform
              </span>
            </div>

            <h1 className="font-merriweather text-5xl md:text-6xl lg:text-7xl font-bold text-dark-gray mb-6 leading-tight">
              Career change resources made for dancers
            </h1>

            <p className="font-montserrat text-xl text-brown-gray mb-8 leading-relaxed max-w-xl">
              At Pivot for Dancers, we're helping professional dancers find meaningful work off the stage with our dancer-specific career change resources.
            </p>

            {/* Email Form + Socials */}
            <div className="flex flex-col items-center md:items-start justify-center w-full mt-6 space-y-4">
              <form
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className={formClass}
                target="_self"
                onSubmit={handleSubmit}
                noValidate
              >
                <input
                  className={`${inputClass}`}
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <button type="submit" className={`${buttonClass}`}>
                  JOIN US
                </button>
              </form>

              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="https://www.facebook.com/pivotfordancers/" className={`${socialMediaIconClass} bg-blue-500 hover:bg-blue-400`} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/pivotfordancers/" className={`${socialMediaIconClass} bg-pink-500 hover:bg-pink-400`} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/company/pivotfordancers/" className={`${socialMediaIconClass} bg-blue-500 hover:bg-blue-400`} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.youtube.com/@pivotfordancers" className={`${socialMediaIconClass} bg-red-500 hover:bg-red-400`} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Content (YouTube Video Embed + Floating Cards) */}
          <div className={`relative transition-all duration-1000 delay-300 py-10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="relative aspect-video w-full">
              <div className="relative w-full h-full rounded-3xl shadow-2xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/I6wSSAMR3FY?si=rRy0U55jnBeqyRz1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl z-10">
                <div className="flex items-center gap-3">
                  <div className="bg-green-500 rounded-full p-2">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-montserrat font-semibold text-dark-gray text-sm">Meaningful work off the stage!</p>
                    <p className="font-montserrat text-xs text-brown-gray">Without losing your identity</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl z-10">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500 rounded-full p-2">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-montserrat font-semibold text-dark-gray text-sm">1309+ Community</p>
                    <p className="font-montserrat text-xs text-brown-gray">Join us</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 px-10">
              <button className="bg-gradient-to-r from-dark-gray to-brown-gray hover:from-brown-gray hover:to-dark-gray text-white font-montserrat font-semibold px-8 py-4 text-lg group rounded-md transition-all duration-300">
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform inline" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-white rounded-2xl p-4 shadow-lg mb-2">
                      <IconComponent className="w-6 h-6 text-light-gray mx-auto mb-2" />
                      <div className="font-merriweather text-2xl font-bold text-dark-gray">{stat.number}</div>
                    </div>
                    <p className="font-montserrat text-sm text-brown-gray">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
