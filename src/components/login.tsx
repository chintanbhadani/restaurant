import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { MdFacebook } from "react-icons/md";

const Login = () => {

  return (
    <>
      <div className="grid grid-cols-1 min-h-screen md:grid-cols-2">
        <div className=" bg-[url('./static/images/banner.jpg')] bg-no-repeat bg-cover">
          <h1 className="font-bold text-3xl p-5 text-white h-[50vh]">Logo</h1>
        </div>
        <div className="p-5">
          <h1 className="text-center  mt-5 mb-3 text-4xl font-semibold">Log in</h1>
          <p className="text-center text-md font-medium">Don't have an account? <a className="text-red-400">Register here!</a></p>
          <div className="mt-5 flex justify-center">
            <div className="md:w-2/3 max-w-sm">
              <div>
                <label htmlFor="username" className="block text-lg font-medium  text-gray-900">Username </label>
                <input type="text" name="usename" className="border mt-1 border-gray-400 w-full h-[40px] rounded-lg text-lg p-5" />
              </div>
              <div>
                <label htmlFor="password" className="block text-lg font-medium  text-gray-900 mt-3">Password</label>
                <input type="password" name="passsword" className="border mt-1 border-gray-400 w-full h-[40px] rounded-lg text-lg p-5" />
              </div>
              <p className="py-2">Use 8 or more characters with a mix of letters, numbers and symbols.</p>
              <button className="bg-red-400 text-2xl font-semibold text-center h-[50px] w-full rounded-md mt-3 text-white">Login</button>
              <div className="flex items-center">
                <div className="flex-1 border-t-2 border-gray-200"></div>
                <span className="px-3 text-md text-slate-400 text-center my-3">or login with</span>
                <div className="flex-1 border-t-2 border-gray-200"></div>
              </div>
              <div className="flex justify-center items-center">
                <a className="w-12 h-12 rounded-md border border-slate-300 flex items-center justify-center cursor-pointer"><FcGoogle className="text-2xl" /></a>
                <a className="w-12 h-12 rounded-md border border-slate-300 flex items-center justify-center mx-5 cursor-pointer"><MdFacebook className="text-2xl text-cyan-600" /></a>
                <a className="w-12 h-12 rounded-md border border-slate-300 flex items-center justify-center cursor-pointer"><BsApple className="text-xl" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Login;
