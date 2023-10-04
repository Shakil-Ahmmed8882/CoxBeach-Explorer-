import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/img/logo.png";
import useAuth from "../../🟢Utils/UseAuth";

const Navbar = () => {

      const {user,logOut} = useAuth()


      const handleLogOut = () => {
            logOut()
            .then(()=> console.log('logged out'))
            .catch(err => console.error(err))
      }

  const navLinks = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/destination">Destination</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Contact</NavLink>
       <Link to='/userHome'>User</Link> 
    </>
  );

  return (
    <div className="navbar bg-base-100 px-6 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <div>
          <img className="w-20" src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-8 px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end flex">
       {user?<>
            <Link onClick={handleLogOut} to='/' className="btn bg-primary-clr">Logout</Link>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full flex">
          <img src={user.photoURL? user.photoURL: 'https://th.bing.com/th/id/R.fd5a137d4cc43657449836c511c422e1?rik=xs4NJnZD7SrL9w&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_24787.png&ehk=XT7ycIEO1QBstZHkYYA%2fmHm7bSjaBM1nSo61Bl%2bnJSs%3d&risl=&pid=ImgRaw&r=0'} />
        </div>
      </label>
       </>:
        <Link to='/login' className="btn bg-primary-clr">Login</Link>
       }
       
        
      </div>
    </div>
  );
};

export default Navbar;
