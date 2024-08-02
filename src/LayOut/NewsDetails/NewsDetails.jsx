import { useParams } from "react-router-dom";
import Header from "../../Pages/Shared/Header/Header";
import RightSideNav from "../../Pages/Shared/RightSideNav/RightSideNav";
import NavBar from "../../Pages/Shared/NavBar/NavBar";

const NewsDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <div className="grid grid-cols-4 ">
        <div className="col-span-3 ">
          <h1 className="font-semibold text-xl mb-2">News details</h1>

          <div className="border">
            <p>{id}</p>
          </div>
        </div>
        <div className="col-span-1">
          <RightSideNav></RightSideNav> <hr />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
