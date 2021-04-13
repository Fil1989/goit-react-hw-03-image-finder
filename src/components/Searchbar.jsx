// import SearchIcon from "@material-ui/icons/Search";

const Searchbar = ({ onChange, onSubmit }) => {
  return (
    <>
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={onSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={onChange}
            name="search"
          />
        </form>
      </header>
      {/* <form onSubmit={onSubmit} className="Searchbar">
        <div className="App_input">
          <input
            type="text"
            name="search"
            placeholder="Search for"
            onChange={onChange}
            // value={search}
          />
          <button type="submit">
            <SearchIcon />
          </button>
        </div>
      </form> */}
    </>
  );
};
export default Searchbar;
