import { useState, useRef } from "react"
import { useSearchParams } from "react-router-dom"
import Search from "../components/Search"
import List from "../components/List"
import campgroundsData from "../assets/campgroundsData"

const Campgrounds = () => {
  const [isSearching, setIsSearching] = useState("");
  const searchRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const eventHandlers = {
    handleSearchClick: () => {
      setIsSearching(searchRef.current.value);
      setSearchParams({ search: searchRef.current.value });
    },
    handleReset: () => {
      setIsSearching("");
      setSearchParams(() => searchParams.delete("?search"));
      searchRef.current.value = null;
    },
  };

  return (
    <main>
      <Search
        ref={searchRef}
        eventHandler={eventHandlers.handleSearchClick} />
      {!isSearching
        ? <section className="flex flex-row flex-wrap gap-4 mx-4">
          <List source={campgroundsData} />
        </section>
        : <section className="flex flex-col gap-4 mx-4">
          <button
            type="button"
            className="btn hover:btn-hover w-72"
            onClick={eventHandlers.handleReset}>
            &larr; Back to Campgrounds full list
          </button>
          <List source={campgroundsData.filter(dataItem => {
            dataItem.id != 'comments' &&
              dataItem.label.toLowerCase() == isSearching.toLowerCase()
          })} />
        </section>
      }
    </main>
  );
}

export default Campgrounds;