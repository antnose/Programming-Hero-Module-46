import { use, useState } from "react";

const StatefulForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    console.log("Handle Submit Function Called");
    e.preventDefault();

    if (password.length <= 8) {
      setError("Password must be 8 character");
    } else {
      setError("");
    }

    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Phone: ", phone);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
            onChange={handleNameChange}
            required
            type="text"
            name="name"
            id="name"
            className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-700 text-white"
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
            onChange={handleEmailChange}
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
            onChange={handlePhoneChange}
            type="number"
            name="phone"
            id="phone"
            className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-700 text-white"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Password
          </label>
          <input
            onChange={handlePasswordChange}
            type="password"
            name="password"
            id="password"
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
        {error && <p> {error} </p>}
      </form>
    </div>
  );
};

export default StatefulForm;
