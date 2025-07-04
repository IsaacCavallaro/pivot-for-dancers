import React, { useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const Footer: React.FC = () => {
  const iconSize = 'h-8 w-8'; // for social media
  const socialMediaIconClass = `text-white p-2 rounded-full flex items-center justify-center ${iconSize} transition-transform transform hover:scale-110`;
  const buttonClass = `
    px-6 py-4 
    text-sm font-semibold 
    text-gray-100 
    bg-purple-gray 
    rounded-md 
    hover:bg-purple-gray 
    opacity-80 hover:opacity-100 
    w-full md:w-auto
    disabled:opacity-50 disabled:cursor-not-allowed
  `.trim();
  const footerInputClass = `
    px-4 py-4 
    text-sm text-gray-900 
    placeholder-gray-400 
    bg-gray-100 
    border border-gray-300 
    rounded-md 
    dark:text-gray-400 
    dark:placeholder-gray-400 
    dark:bg-gray-700 
    dark:border-gray-700 
    w-full md:w-auto
    md:w-96
  `.trim();

  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    // Reset status when user starts typing again
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
    if (error) {
      setError(null);
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError("Please provide your email to join us.");
      setSubmitStatus('error');
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setError("Please enter a valid email address.");
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSubmitStatus('idle');

    try {
      // Check if API configuration is available
      if (!API_URL || !API_KEY || API_URL === "YOUR_API_URL_HERE" || API_KEY === "YOUR_API_KEY_HERE") {
        console.log("API configuration not set, using fallback method");
        throw new Error("API configuration is missing or not set");
      }

      // Make the API request to submit user data
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: trimmedEmail,
          groups: [], // Add specific group IDs if needed
          trigger_automation: true, // Enable automation if you have one set up
        }),
      });

      if (response.ok) {
        console.log("Successfully submitted user data to API");
        setSubmitStatus('success');
        setEmail('');
        setError(null);
      } else {
        const errorData = await response.json();
        console.error("API error:", errorData);
        setError("There was an error submitting your email. Please try again.");
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error("Submission error:", err);

      // Fallback to the original method if API fails
      try {
        const response = await fetch('https://stats.sender.net/forms/aKrmkz/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: trimmedEmail
          })
        });

        if (response.ok) {
          setSubmitStatus('success');
          setEmail('');
          setError(null);
        } else {
          setError("There was an error submitting your email. Please try again.");
          setSubmitStatus('error');
        }
      } catch (fallbackError) {
        console.error('Fallback subscription error:', fallbackError);
        setError("There was an error submitting your email. Please try again.");
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const getButtonText = () => {
    if (isSubmitting) return 'JOINING...';
    if (submitStatus === 'success') return 'JOINED!';
    if (submitStatus === 'error') return 'TRY AGAIN';
    return 'JOIN US';
  };

  return (
    <footer className="bg-gray-800 text-white">
      {/* Container for consistent width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <section className="py-10 sm:pt-16 lg:pt-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 lg:gap-x-12 text-center">
            {/* Logo and Description */}
            <div className="flex flex-col items-center h-full space-y-6">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Pivot For Dancers
              </p>
              <p className="text-gray-300 leading-relaxed">
                Discover inspiration, guidance, and a vibrant community to help you navigate your journey toward a fulfilling and meaningful future filled with purpose, growth, opportunities, and lasting connections.
              </p>
            </div>

            {/* Email Sign-Up Form */}
            <div className="flex flex-col items-center space-y-6 lg:px-6">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Join our Community
              </p>
              <div className="flex flex-col space-y-4 w-full max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  onKeyPress={handleKeyPress}
                  disabled={isSubmitting}
                  className={`${footerInputClass} h-12`}
                />
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting || !email.trim()}
                  className={`${buttonClass} h-12 flex items-center justify-center`}
                >
                  {getButtonText()}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <p className="text-purple-gray text-sm font-medium">
                  Thank you! You should receive a confirmation shortly.
                </p>
              )}
              {error && (
                <p className="text-red-400 text-sm font-medium">
                  {error}
                </p>
              )}
            </div>

            {/* Contact and Social Media */}
            <div className="flex flex-col items-center space-y-6">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Contact
              </p>
              <a
                href="mailto:pivotfordancers@gmail.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                pivotfordancers@gmail.com
              </a>
              <a
                href="/terms-of-service"
                className="text-gray-300 hover:text-white transition-colors"
              >
                @pivotfordancers
              </a>
              <ul className="flex items-center justify-center space-x-3">
                <li>
                  <a
                    href="https://www.facebook.com/pivotfordancers/"
                    className={`${socialMediaIconClass} bg-blue-500 hover:bg-blue-400`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit us on Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/pivotfordancers/"
                    className={`${socialMediaIconClass} bg-pink-500 hover:bg-pink-400`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit us on Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/pivotfordancers/"
                    className={`${socialMediaIconClass} bg-blue-600 hover:bg-blue-500`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit us on LinkedIn"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@pivotfordancers"
                    className={`${socialMediaIconClass} bg-red-600 hover:bg-red-500`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit us on YouTube"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Border Divider */}
        <div className="border-t border-gray-600 my-1"></div>

        {/* Bottom Section */}
        <div className="py-12 text-center space-y-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a
              href="https://drive.google.com/file/d/1XiqWl5qiHd1xCGF62D300hyodmsCe5OC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition"
            >
              Privacy Policy
            </a>
            <a
              href="https://drive.google.com/file/d/1JVBQN7SZBSSup9E-avhsTXRxZ1Y_7Zeg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition"
            >
              Happy Trails Terms and Conditions
            </a>
            <a
              href="https://drive.google.com/file/d/11ssn_alwWa1K0IrgGQgE7Dt65TRmsXrH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition"
            >
              Pivot Mentorship Program Terms and Conditions
            </a>
          </div>
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Pivot for Dancers. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;