import CentralNav from "../Shared/CentralNav/CentralNav";
import Header from "../Shared/Header/Header";
import LeftSideNave from "../Shared/LeftSideNav/LeftSideNave";
import NavBar from "../Shared/NavBar/NavBar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <br />
      <NavBar></NavBar>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-6 mt-10">
        <div>
          <LeftSideNave></LeftSideNave>
        </div>
        <div className="md:col-span-2">
          <CentralNav></CentralNav>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
