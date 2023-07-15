import { Link, Outlet } from "react-router-dom"
import { useState } from "react"
import PropTypes from "prop-types"

const Layout = ({ state, eventHandler }) => {
  const [isActive, setIsActive] = useState(false);
  const toggleIsActive = () => {
    setIsActive(!isActive);
  }

  return (
    <>
      <header>
        <nav className="md:hidden flex flex-row justify-between items-center py-6 px-4">
          <img
            src="./src/assets/page_svg/Logo.svg"
            alt="YelpCamp logo"
            className="inline" />
          { !isActive
            ? <img
              src="./src/assets/page_svg/Hamburger_Menu.svg"
              alt="Hamburger menu icon"
              className="inline cursor-pointer"
              onClick={toggleIsActive} />
            : <img
              src="./src/assets/page_svg/Close.svg"
              alt="Close menu icon"
              className="inline cursor-pointer"
              onClick={toggleIsActive} />
          }
        </nav>
        {isActive && 
          <div className="md:hidden w-screen h-screen bg-light-grey opacity-90 fixed z-10">
            <div className="flex flex-col justify-center items-center p-8 gap-y-4">
              <Link
                to={"/"}
                className="hover:underline hover:underline-offset-2 hover:font-bold">
                Home
              </Link>
              {state.isLoggedIn
                ? <>
                  <span
                    className="text-dark-grey">
                    {state.userName}
                  </span>
                  <button
                    type="button"
                    className="btn hover:btn-hover"
                    onClick={eventHandler}>
                    Logout
                  </button>
                </>
                : <Link
                  to={"/login"}>
                  <button
                    type="button"
                    className="btn hover:btn-hover">
                    Login
                  </button>
                </Link>
              }
            </div>
          </div>
        }
        <nav className="hidden md:flex md:flex-row md:justify-between md:items-center p-4">
          <span>
            <img
              src="./src/assets/page_svg/Logo.svg"
              alt="YelpCamp logo"
              className="inline -mt-1" />
            <Link
              to={"/"}
              className="ml-4 hover:underline hover:underline-offset-2 hover:font-bold">
              Home
            </Link>
          </span>
          <span>
            {state.isLoggedIn
              ? <>
                <span
                  className="mr-4 text-dark-grey">
                  {state.userName}
                </span>
                <button
                  type="button"
                  className="btn hover:btn-hover"
                  onClick={eventHandler}>
                  Logout
                </button>
              </>
              : <Link
                to={"/login"}>
                <button
                  type="button"
                  className="btn hover:btn-hover">
                  Login
                </button>
              </Link>
            }
          </span>
        </nav>
      </header>
      <Outlet />
      <footer className="p-4">
        <img
          src="./src/assets/page_svg/Logo.svg"
          alt="YelpCamp logo"
          className="inline" />
      </footer>
    </>
  );
}

Layout.propTypes = {
  state: PropTypes.object,
  eventHandler: PropTypes.func,
}

export default Layout;