import { useRef } from "react"
import { useNavigate } from "react-router-dom"

const AddCampground = () => {
  const nameRef = useRef(null);
  const prizeRef = useRef(null);
  const imageRef = useRef(null);
  const descriptionRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(-1);
  }

  return (
    <main className="flex flex-col flex-wrap items-start md:items-center p-4">
      <h2
        className="text-black text-2xl font-semibold md:font-bold md:text-3xl">
        Add new campground
      </h2>
      <form
        className="flex flex-col flex-nowrap gap-2 mt-4"
        onSubmit={handleSubmit}>
        <label
          htmlFor={nameRef}
          className="text-dark-grey mt-2">
          Username
        </label>
        <input
          ref={nameRef}
          type={"text"}
          placeholder="Mount Ulap"
          spellCheck={false}
          autoCorrect={"off"}
          autoComplete={"off"}
          className="bg-light-grey p-2 leading-7"
        />
        <label
          htmlFor={prizeRef}
          className="text-dark-grey mt-2">
          Prize
        </label>
        <input
          ref={prizeRef}
          type={"text"}
          placeholder="$ 149"
          spellCheck={false}
          autoCorrect={"off"}
          autoComplete={"off"}
          className="bg-light-grey p-2 leading-7"
        />
        <label
          htmlFor={imageRef}
          className="text-dark-grey mt-2">
          Image
        </label>
        <input
          ref={imageRef}
          type={"text"}
          placeholder="www.thepinoytraveler.com/2018/01/mt-ulap-diy-daylike.html"
          size={50}
          spellCheck={false}
          autoCorrect={"off"}
          autoComplete={"off"}
          className="bg-light-grey p-2 leading-7"
        />
        <label
          htmlFor={descriptionRef}
          className="text-dark-grey mt-2">
          Description
        </label>
        <textarea
          ref={descriptionRef}
          placeholder="One of the most famous hikes in Benguet is Mt Ulap in Itogon."
          cols={50}
          rows={5}
          spellCheck={false}
          autoCorrect={"off"}
          autoComplete={"off"}
          className="bg-light-grey p-2 leading-7"
        ></textarea>
        <button
          type="submit"
          className="btn hover:btn-hover w-full mt-6" >
          Add Campground
        </button>
      </form>
    </main>
  );
}

export default AddCampground;