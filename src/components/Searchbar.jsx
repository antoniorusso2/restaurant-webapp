import { useState } from "react";
import { useSearchParams } from "react-router";

export default function Searchbar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("name") || "");

  function handleSearch(e) {
    e.preventDefault();
    const newValue = search;
    // search value
    newValue ? setSearchParams({ name: newValue }) : setSearchParams({}); //elimina parametro name dalla query string in caso non sia scritto niente nella barra di ricerca
  }

  function handleInput(e) {
    const newValue = e.target.value;
    setSearch(newValue);
  }

  // refetch piatti con il reset del campo ricerca
  function handleReset() {
    setSearch("");
    setSearchParams({}); //elimina parametro name dalla query string in caso non sia scritto niente nella barra di ricerca
  }

  return (
    <form className="d-flex gap-2" role="search" onSubmit={handleSearch}>
      <input
        className="form-control"
        type="search"
        id="search"
        placeholder="Search"
        aria-label="Search"
        onChange={handleInput}
        value={search}
      />
      <button className="btn btn-outline-success" type="submit">
        Cerca
      </button>
      <button type="reset" onClick={() => handleReset()} className="btn btn-outline-danger">
        Reset
      </button>
    </form>
  );
}
