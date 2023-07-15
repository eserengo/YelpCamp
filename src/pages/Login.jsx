import { forwardRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import PropTypes from "prop-types"

const Login = forwardRef(({ eventHandler }, ref) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col flex-nowrap md:flex-row">
      <section className="p-8 md:px-20 md:w-2/3">
        <header className="flex flex-row flex-wrap gap-4 justify-between items-center">
          <img
            src="./src/assets/page_svg/Logo.svg"
            alt="YelpCamp logo"
            className="inline" />
          <Link
            to={"/campgrounds"}
            className="inline">
            <button
              type="button"
              className="btn hover:btn-hover">
              &larr; Back to Campgrounds
            </button>
          </Link>
        </header>
        <main className="mt-6 sm:mt-12 md:mt-24">
          <h2 className="text-black text-2xl font-semibold md:font-bold md:text-3xl">
            Start exploring camps from all around the world.
          </h2>
          <form
            className="flex flex-col flex-nowrap gap-4 mt-4"
            onSubmit={(event) => { eventHandler(event), navigate(-1) }}>
            <label
              htmlFor={ref.userNameRef}
              className="text-dark-grey">
              Username
              </label>
            <input
              ref={ref.userNameRef}
              type={"text"}
              placeholder="johnDoe_91"
              size={20}
              spellCheck={false}
              autoCorrect={"off"}
              autoComplete={"off"}
              className="bg-light-grey p-2 leading-7"
            />
            <label
              htmlFor={ref.userPasswordRef}
              className="text-dark-grey">
              Password
            </label>
            <input
              ref={ref.userPasswordRef}
              type={"password"}
              placeholder="Enter your password"
              size={20}
              spellCheck={false}
              autoCorrect={"off"}
              autoComplete={"off"}
              className="bg-light-grey p-2 leading-7"
            />
            <button
              type="submit"
              className="btn hover:btn-hover w-full" >
              Login
            </button>
          </form>
        </main>
      </section>
      <section className="bg-light-grey flex flex-col flex-nowrap justify-center gap-4 px-4 max-md:py-8 md:px-12 md:w-1/3">
        <h3
          className="font-semibold text-xl">
          &ldquo; YelpCamp has honestly saved me hours of research time, and the camps on here are definitely well picked and added. &rdquo;
        </h3>
        <span className="flex flex-row">
          <img 
            src="./src/assets/page_svg/User_Testimonial.svg"
            alt="user avatar" />
          <span className="text-dark-grey ml-2">
            May Andrews
            <br />
            Professional Hiker
          </span>
        </span>
      </section>
    </div>
  );
});

Login.displayName = "Login";
Login.propTypes = {
  eventHandler: PropTypes.func,
};

export default Login;