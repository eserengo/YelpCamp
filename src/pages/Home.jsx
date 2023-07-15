import { Link } from "react-router-dom"

const Home = () => (
  <div className="md: flex flex-row">
    <div className="flex flex-col flex-nowrap bg-light-grey md:w-3/6 md:py-6 md:px-12">
      <header className="px-2 py-6 sm:px-4 md:p-0">
        <img
          src="./src/assets/page_svg/Logo.svg"
          alt="YelpCamp logo" />
      </header>
      <div className="md:hidden">
        <img
          src="./src/assets/page_images/Hero_Image_Tablet_and_Mobile.jpg"
          alt="hero background" />
      </div>
      <main className="p-2 pt-6 sm:px-6 md:px-0 md:pt-16">
        <h1
          className="text-black text-2xl font-semibold sm:text-3xl md:font-bold md:text-4xl">
          Explore the best camps on Earth.
        </h1>
        <p
          className="text-dark-grey my-2">
          YelpCamp is a curated list of the best camping spots on Earth. Unfiltered and unbiased reviews.
        </p>
        <span className="text-dark-grey">
          <img
            src="./src/assets/page_svg/Checkmark.svg"
            alt="chekmark svg"
            className="inline w-4 me-2" />
          Add your own camp suggestions.
        </span>
        <br />
        <span className="text-dark-grey">
          <img
            src="./src/assets/page_svg/Checkmark.svg"
            alt="chekmark svg"
            className="inline w-4 me-2" />
          Leave reviews and experiences.
        </span>
        <br />
        <span className="text-dark-grey">
          <img
            src="./src/assets/page_svg/Checkmark.svg"
            alt="checkmark svg"
            className="inline w-4 me-2" />
          See location for all camps.
        </span>
        <br />
        <Link
          to={"campgrounds"}>
          <button
            type="button"
            className="btn hover:btn-hover my-4" >
            View Campgrounds
          </button>
        </Link>
      </main>
      <footer className="px-2 pb-6 sm:px-6 md:px-0">
        <p
          className="text-dark-grey">
          Partened with:
        </p>
        <span className="flex flex-row flex-nowrap">
          <img
            src="./src/assets/page_svg/Airbnb.svg"
            alt="Airbnb logo"
            className="inline w-4/12" />
          <img
            src="./src/assets/page_svg/Booking.svg"
            alt="Booking logo"
            className="inline w-4/12" />
          <img
            src="./src/assets/page_svg/Plum_guide.svg"
            alt="Plum Guide logo"
            className="inline w-4/12" />
        </span>
      </footer>
    </div>
    <div className="hidden md:block md:w-3/6">
      <img
        src="./src/assets/page_images/Hero_Image.jpg"
        alt="hero background"
        className="min-w-full max-h-screen" />
    </div>
  </div>
);

export default Home;