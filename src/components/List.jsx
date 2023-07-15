import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const List = ({ source }) => {

  return (
    !source.length
      ? <h3 className="text-black text-xl font-bold mx-auto">
        No results founded.
      </h3>
      : source.map(sourceItem => {
        return (
        sourceItem.id != 'comments' &&
          <div
            key={`${sourceItem.id}_card`}
            className="flex flex-col gap-2 p-2 border border-medium-grey rounded w-72">
            <img
              src={sourceItem.preview}
              alt={sourceItem.summary}
              className="rounded" />
            <h3
              className="text-black font-bold">
              {sourceItem.label}
            </h3>
            <p
              className="text-dark-grey max-w-xs">
              {sourceItem.summary}
            </p>
            <Link
              to={`/campgrounds/${sourceItem.id}`}>
              <button
                type="button"
                className="btn hover:btn-hover w-full">
                View Campground
              </button>
            </Link>
          </div>
        )
      })
  );
}

List.propTypes = {
  source: PropTypes.array,
};

export default List;