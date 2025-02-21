// Just a simple form without any style

// const SimgpleForm = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("name: ", e.target.name.value);
//     console.log("Email: ", e.target.email.value);
//     console.log("Email: ", e.target.phone.value);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" />

//         <input type="text" name="email" />
//         <input type="number" name="phone" />

//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   );
// };

// export default SimgpleForm;

// A simple form with TailwindCss using (chatgpt)
const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name: ", e.target.name.value);
    console.log("Email: ", e.target.email.value);
    console.log("Phone: ", e.target.phone.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-center text-white mb-6">
          Contact Form
        </h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-700 text-white"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-700 text-white"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Phone
          </label>
          <input
            type="number"
            name="phone"
            id="phone"
            className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-700 text-white"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
