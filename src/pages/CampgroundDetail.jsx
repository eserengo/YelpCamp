import { useParams, Link } from "react-router-dom"
import campgroundsData from "../assets/campgroundsData"

const CampgroundDetail = () => {
  const params = useParams();

  return (
    <main className="relative flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 p-4 mt-16 sm:mt-12 gap-4">
      <aside
        className="max-md:order-2 max-h-fit md:col-span-1 md:row-span-1 border border-medium-grey rounded p-8">
        <img
          src="../src/assets/page_images/Map.png"
          alt="location map"
          className="rounded m-auto" />
      </aside>
      {campgroundsData.filter(dataItem => dataItem.id == params.id)
        .map(filteredItem => {
          return (
            <section
              key={`detail_${filteredItem.id}`}
              className="max-md:order-1 md:col-start-2 md:col-span-2 md:row-span-1 flex flex-col flex-nowrap gap-2 border border-medium-grey rounded p-4">
              <img
                src={filteredItem.picture}
                alt={filteredItem.summary}
                className="rounded" />
              <div className="flex flex-row flex-nowrap justify-between items-center">
                <h3
                  className="text-black font-bold text-xl">
                  {filteredItem.label}
                </h3>
                <p
                  className="text-black font-medium">
                  {filteredItem.prize}
                </p>
              </div>
              <p
                className="text-dark-grey max-w-xs">
                {filteredItem.summary}
              </p>
            </section>
          )
        })
      }
      <section
        className="max-md:order-3 md:col-start-2 md:col-span-2 md:row-start-2 md:row-span-1 flex flex-col flex-nowrap items-end p-4 border border-medium-grey rounded">
        {campgroundsData.map(dataItem => {
          return (
            dataItem.id == "comments" &&
              dataItem.content.map((contentItem, contentIndex) => {
                return (
                  <div
                    key={`comment_${contentIndex}`}
                    className="border-medium-grey border-b py-4">
                    <h4
                      className="text-black font-bold">
                      {contentItem.user}
                    </h4>
                    <p
                      className="text-black font-medium float-right -mt-6">
                      {contentItem.postedAt}
                    </p>
                    <p
                      className="text-dark-grey my-2">
                      {contentItem.summary}
                    </p>
                  </div>
                )
              })
            )
          })
        }
        <Link
          to={"../add_comment"}>
          <button
            type="button"
            className="btn hover:btn-hover my-8">
            <img
              src="../src/assets/page_svg/Chat_Bubble.svg"
              alt="chat bubble"
              className="inline mr-2" />
            Leave a review
          </button>
        </Link>
      </section>
      <Link
        to={"/campgrounds"}
        className="absolute left-4 right-4 -top-16 sm:-top-12">
        <button
          type="button"
          className="btn hover:btn-hover">
          &larr; Back to Campgrounds
        </button>
      </Link>
    </main>
  );
}

export default CampgroundDetail;