import React from 'react';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="section bg-beige text-black p-8 relative">
      <h2 className="mt-2 mb-6 text-3xl font-merriweather text-text-black md:text-5xl text-center">Join the Pivot for Dancers Community</h2>
      <p className="text-lg mb-8 text-center font-montserrat">
      When you join, you’ll become part of a 
      </p>
      <p className="text-lg mb-8 text-center font-montserrat">
      growing community of current and former professional dancers 
      </p>
      <p className="text-lg mb-8 text-center font-montserrat">
      who are talking about career change. You’ll also get
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
        <label htmlFor="mce-EMAIL" className="block mb-2 text-sm font-montserrat text-black text-center">
          Your email
        </label>
        <input
          type="email"
          name="EMAIL"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@example.com"
          required
        />

        <p id="helper-text-explanation" className="mt-2 text-sm text-black dark:text-gray-400 text-cente font-montserrat">
          We’ll never share your details. Read our{' '}
          <a href="#" className="font-montserrat text-blue-600 hover:underline dark:text-blue-500">
            Privacy Policy
          </a>
        </p>

        <input
        type="submit"
        name="subscribe"
        id="mc-embedded-subscribe"
        className="bg-light-gray hover:bg-dark-gray text-white font-montserrat py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-light-gray mt-4"
        value="Subscribe"
      />
      </div>
      </form>
    </div>
  );
};

export default Contact;
