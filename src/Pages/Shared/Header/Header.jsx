import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center space-y-3">
      <img className="mx-auto mt-10" src={logo} alt="" />
      <p className="font-semibold">Journalism Without Fear or Favour</p>
      <p className="text-xl font-semibold">
        {moment().format("dddd, MMMM, D, YYYY")}
      </p>
    </div>
  );
};

export default Header;
