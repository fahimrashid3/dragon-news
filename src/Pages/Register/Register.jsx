import { Link } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handelRegister = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    // const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, photo, email, Password);

    // create user
    createUser(email, password)
      .then((result) => {
        // Signed up
        console.log(result);
        // ...
      })
      .catch((error) => {
        console.error(error);
        // ..
      });
  };

  return (
    <div>
      <NavBar></NavBar>
      <h1 className="font-bold text-3xl text-center mt-10">Register Here</h1>

      <div className="card bg-base-100 w-full lg:w-1/2 md:w-3/4 shrink-0 shadow-2xl mx-auto">
        <form onSubmit={handelRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              name="text"
              type="name"
              placeholder="Enter your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <div className="flex mt-3 gap-3">
              <input type="checkbox" name="checkbox" />
              <a className="text-green-600" href="">
                Accept all terms and conditions
              </a>
            </div>
          </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="px-10 pb-5">
          Already have an account.{" "}
          <Link to="/login" className="text-blue-700">
            Please Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
