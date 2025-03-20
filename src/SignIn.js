import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold">Welcome, Log into your account</h2>
      <input type="text" placeholder="Enter your Login" className="border p-2 my-2" />
      <input type="password" placeholder="Enter Password" className="border p-2 my-2" />
      <button className="bg-blue-500 text-white px-4 py-2 mt-2">Login</button>
      <Link to="/signup" className="text-blue-600 mt-2">Sign up</Link>
    </div>
  );
};

export default SignIn;
