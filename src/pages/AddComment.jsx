import { useRef } from "react"
import { useNavigate } from "react-router-dom"

const AddComment = () => {
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
        Add new comment
      </h2>
      <form
        className="flex flex-col flex-nowrap gap-2 mt-4"
        onSubmit={handleSubmit}>
        <label
          htmlFor={descriptionRef}
          className="text-dark-grey mt-2">
          Description
        </label>
        <textarea
          ref={descriptionRef}
          placeholder="This was probably the best camp I've visited this past year, definitely recommend visiting any time soon."
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
          Post comment
        </button>
      </form>
    </main>
  );
}

export default AddComment;