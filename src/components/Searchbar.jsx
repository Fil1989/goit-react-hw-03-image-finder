import SearchIcon from "@material-ui/icons/Search";

const Searchbar = ({ onChange, onSubmit }) => {
  return (
    <>
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={onSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
            <SearchIcon />
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
    </>
  );
};
export default Searchbar;
