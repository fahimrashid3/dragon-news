import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";

const Login = () => {
  const { sighIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    sighIn(email, password)
      .then((result) => {
        console.log(result.user);

        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <NavBar></NavBar>
      <h1 className="font-bold text-3xl text-center mt-10">LogIn Here</h1>

      <div className="card bg-base-100 w-full lg:w-1/2 md:w-3/4 shrink-0 shadow-2xl mx-auto">
        <form onSubmit={handelLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="px-10 pb-5">
          Do not have an account.{" "}
          <Link to="/register" className="text-blue-600">
            Please Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
