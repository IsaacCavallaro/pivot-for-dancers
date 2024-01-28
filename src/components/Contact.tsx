import React from 'react';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="section bg-beige text-black p-8 relative">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <p className="text-lg mb-8 text-center">
        Want to share your story on Pivot for Dancers? 
      </p>
      <p className="text-lg mb-8 text-center">
        Have a career change resource you’d like to tell us about? 
      </p>
      <p className="text-lg mb-8 text-center">
        Looking for help finding jobs for dancers that aren’t performance jobs?
      </p>

      {/* Mailchimp embedded form */}
      <form
        action="https://pivotfordancers.us19.list-manage.com/subscribe/post?u=be8fecbf3f1babc7628da411c&amp;id=e5d51bd2a0&amp;f_id=00c396e4f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_self"
        noValidate
      >
      <div className="flex flex-col items-center justify-center mx-auto max-w-md">
        <label htmlFor="mce-EMAIL" className="block mb-2 text-sm font-medium text-black text-center">
          Your email
        </label>
        <input
          type="email"
          name="EMAIL"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@example.com"
          required
        />

        <p id="helper-text-explanation" className="mt-2 text-sm text-black dark:text-gray-400 text-center">
          We’ll never share your details. Read our{' '}
          <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
            Privacy Policy
          </a>
        </p>

        <input
        type="submit"
        name="subscribe"
        id="mc-embedded-subscribe"
        className="bg-light-gray hover:bg-dark-gray text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800 mt-4"
        value="Subscribe"
      />
      </div>
      </form>
    </div>
  );
};

export default Contact;
