import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Navbar = () => {
  const handleLogin = () =>{
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'User Logged in successfully',
      showConfirmButton: false,
      timer: 1400
    })
  }
  return (
    <div className="">
      <div className="navbar bg-base-100 flex items-center justify-center">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-2xl font-semibold"> 
              <Link to="/">Home </Link>
            </li>
            
          </ul>
        </div>
        <div onClick={ handleLogin} className="navbar-end">
          <a className="btn btn-warning font-serif">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
