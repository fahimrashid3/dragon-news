import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import qZoon1 from "../../../assets/qZone1.png";
import qZoon2 from "../../../assets/qZone2.png";
import qZoon3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      {/* Login section */}
      <div className="bg-base-200 p-4 rounded-lg">
        <h1 className="font-bold text-xl text-center">Login With</h1>
        <button className="btn btn-outline btn-primary mt-4 w-full">
          <FaGoogle></FaGoogle> Login With Google
        </button>
        <button className="btn btn-outline mt-4 w-full">
          <FaGithub></FaGithub> Login With GitHub
        </button>
      </div>

      {/* find us section */}
      <div className="bg-base-200 p-4 rounded-lg mt-5">
        <h1 className="font-bold text-xl text-center mb-2">Fid Us On</h1>
        <a
          href="https://www.facebook.com/fahimrashid.fb"
          className="p-4 flex gap-3 border rounded-t-lg text-lg items-center"
        >
          <FaFacebook className="text-3xl"></FaFacebook> Facebook
        </a>
        <a
          href="https://www.instagram.com/fahimrashid1/"
          className="p-4 flex gap-3 border  text-lg items-center"
        >
          <FaInstagram className="text-3xl"></FaInstagram> Instagram
        </a>
        <a
          href="https://x.com/FahimRashid20"
          className="p-4 flex gap-3 border rounded-b-lg text-lg items-center"
        >
          <FaXTwitter className="text-3xl"></FaXTwitter> X Twitter
        </a>
      </div>

      {/* Q Zoon section */}
      <div className="bg-base-200 p-4 rounded-lg mt-5 space-y-5">
        <h1 className="font-bold text-xl text-center">Q zoon</h1>
        <img src={qZoon1} alt="" />
        <img src={qZoon2} alt="" />
        <img src={qZoon3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
