import { FaTelegramPlane } from "react-icons/fa";

function Header() {
  return (
    <div className="flex shadow-lg mb-2">
      {/* Left */}
      <div className="flex flex-grow items-center m-4 ml-20">
          <div className="relative">
        <FaTelegramPlane className="absolute -top-7 left-20 text-xs w-5 h-5 rounded-full flex items-center " />
          </div>
        <div className="flex items-center mr-40">
          <p className="text-blue-400 font-semibold">INTERN</p>
          <p>SHALA</p>
        </div>
      </div>

        {/* Right */}
        <div className="flex items-center mr-32">
        <p className="header_elems">Internships</p>
        <p className="header_elems flex items-center">Online Trainings<p className="bg-yellow-500 m-1 rounded-md p-1 text-white">OFFER</p></p>
        <p className="header_elems">Fresher Jobs</p>
        <p className="header_elems">Login/Register</p>
        </div>
    </div>
  );
}

export default Header;
