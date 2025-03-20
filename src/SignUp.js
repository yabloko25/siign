import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold">Welcome, Sign up</h2>
      <input type="email" placeholder="Enter your Email" className="border p-2 my-2" />
      <input type="text" placeholder="Create your Login" className="border p-2 my-2" />
      <input type="password" placeholder="Create your Password" className="border p-2 my-2" />
      <button className="bg-blue-500 text-white px-4 py-2 mt-2">Sign up</button>
      <Link to="/signin" className="text-blue-600 mt-2">Sign in</Link>
    </div>
  );
};

export default SignUp;
