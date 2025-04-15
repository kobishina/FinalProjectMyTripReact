import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MyContext } from '../context/myContext';
import { KEY_TOKEN } from '../constant/constants';
import "./header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../img/logo2.jpg";

export default function Header({ type }) {
  const { user, setUser } = useContext(MyContext);
  const [openNav, setOpenNav] = useState(false);
  const [loading, setLoading] = useState(false); // 👈 Add loading state
  const nav = useNavigate();

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  const location = useLocation();
  useEffect(() => {
    setOpenNav(false);
  }, [location.pathname]);

  const logout = async () => {
    setLoading(true); // 👈 Start loading

    setTimeout(() => {
      setUser(null);
      localStorage.removeItem(KEY_TOKEN);
      nav("/home");
      setLoading(false); // 👈 Stop loading
    }, 1000); // Simulating logout process (1.5s)
  };

  if (type === "user") return (
    <header style={{ position: "fixed", zIndex: "1", top: "0" }} className="container-fluid">
      <nav className='container py-3'>
        <GiHamburgerMenu onClick={() => setOpenNav(!openNav)} size={24} className='bur d-none' />
        <div className='content d-flex justify-content-between'>
          <div className={`links-and-logo d-flex align-items-center ${openNav && "openNav"}`}>
            <Link to="/home"> <img className='rounded-circle' width={50} src={logo} alt='logo' /></Link>
            <ul className='ul-links d-flex align-items-center'>
              {user ?
                <>
                  <li className='li_links'><Link to="/home">Home</Link></li>
                  <li className='li_links'><Link to="/myTrip">My Journy</Link></li>
                  <li className='li_links'><Link to="/about">About Us & FAQ</Link></li>
                  <li className='li_links'><Link to="/contact">Contact Us & Gallery</Link></li>
                  <li className='li_links'><Link to="/favorites">Favorites ⭐</Link></li>
                </>
                :
                <>
                  <li className='li_links'><Link to="/logIn">LogIn</Link></li>
                  <li className='li_links'><Link to="/signUp">SignUp</Link></li>
                  <li className='li_links'><Link to="/home">Home</Link></li>
                  <li className='li_links'><Link to="/about">About Us & FAQ</Link></li>
                  <li className='li_links'><Link to="/contact">Contact Us & Gallery</Link></li>
                </>
              }
            </ul>
          </div>

          <div className={`name-and-logout d-flex ${openNav && "openNav"}`}>
            {user &&
              <>
                <h4>Hello {user.name.charAt(0).toUpperCase() + user.name.slice(1)}</h4>
                <button onClick={logout} className='btn btn-danger ms-2' disabled={loading}>
                  {loading ? <span className="spinner-border spinner-border-sm"></span> : "LogOut"}
                </button>
              </>
            }
          </div>
        </div>
      </nav>
    </header>
  );

  if (type === "admin") return (
    <header style={{ backgroundColor: "blue", position: "fixed", zIndex: "1", top: "0" }} className="container-fluid">
      <nav className='container py-3'>
        <GiHamburgerMenu onClick={() => setOpenNav(!openNav)} size={24} className='bur d-none' />
        <div className='content d-flex justify-content-between'>
          <div className={`links-and-logo d-flex align-items-center ${openNav && "openNav"}`}>
            {user &&
              <>
                <h3>Hello {user.name} Admin</h3>
                <ul className='ul-links d-flex align-items-center'>
                  <li className='li_links'><Link to="/admin/users">Users</Link></li>
                  <li className='li_links'><Link to="/admin/places">Places</Link></li>
                  <li className='li_links'><Link to="/admin/towns">Towns</Link></li>
                </ul>
              </>
            }
          </div>

          <div className={`name-and-logout d-flex ${openNav && "openNav"}`}>
            {localStorage[KEY_TOKEN] ?
              <>
                <button onClick={logout} className='btn btn-danger ms-2' disabled={loading}>
                  {loading ? <span className="spinner-border spinner-border-sm"></span> : "LogOut"}
                </button>
              </>
              :
              <Link className='btn btn-info' to="/admin">LogIn</Link>
            }
          </div>
        </div>
      </nav>
    </header>
  );
}
