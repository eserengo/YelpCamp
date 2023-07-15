import { forwardRef } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const Search = forwardRef(({ eventHandler }, ref) => {
  const onEnterKeydown = (event) => {
    event.code == "Enter" && eventHandler();
  };

  return (
    <section className="bg-light-grey m-4 mt-0 p-4 z-0">
      <h2 className="text-black text-2xl font-semibold md:font-bold md:text-3xl">
        Welcome to YelpCamp!
      </h2>
      <p className="text-dark-grey my-2 max-w-xs">
        View our hand-picked campgrounds from all over the world, or add your own.
      </p>
      <div className="relative flex flex-col sm:flex-row">
        <label
          htmlFor={ref}
          className="absolute top-2.5 left-2.5">
          <img src="./src/assets/page_svg/Search_Icon.svg" alt="Search icon" className="inline" />
        </label>
        <input
          ref={ref}
          type={"search"}
          placeholder="Search for camps"
          size={24}
          spellCheck={false} 
          autoCorrect={"off"}
          autoComplete={"off"}
          className="p-2 ps-8 leading-7"
          onKeyDown={(event) => onEnterKeydown(event)}
        />
        <button
          type="button"
          className="btn hover:btn-hover max-sm:mt-2 sm:ms-2"
          onClick={eventHandler}>
          Search
        </button>
      </div>
      <br />
      <Link
        to={"add_campground"}
        className="text-dark-grey my-2 underline underline-offset-2">
        Or add your own campground
      </Link>
    </section>
  );
});

Search.displayName = "Search";
Search.propTypes = {
  eventHandler: PropTypes.func,
};

export default Search;