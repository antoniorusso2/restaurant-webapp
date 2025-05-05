import { useState } from "react";
import { useSearchParams } from "react-router";

export default function Searchbar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("name") || "");

  const handleSearch = (e) => {
    e.preventDefault();
    const newValue = search;
    // search value
    newValue ? setSearchParams({ name: newValue }) : setSearchParams({}); //elimina parametro name dalla query string in caso non sia scritto niente nella barra di ricerca
  };

  function handleInput(e) {
    const newValue = e.target.value;
    setSearch(newValue);
  }

  return (
    <form className="d-flex" role="search" onSubmit={handleSearch}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={handleInput}
        value={search}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}
