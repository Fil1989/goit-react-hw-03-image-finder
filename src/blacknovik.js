import SearchIcon from "@material-ui/icons/Search";
import { useState, useEffect } from "react";
// import axios from "axios";
// import theFetch from "./serverApi";

function App() {
  const [search, setSearch] = useState();
  const [arrayy, setArrayy] = useState();
  const handleChange = (e) => {
    setSearch(e.currentTarget.value);
  };

  useEffect(() => {
    fetch(
      "https://pixabay.com/api/?key=20277592-c9806cff80bff398502402406&q=love&image_type=photo"
    )
      .then((res) => res.json())
      .then((response) => {
        // console.log(response.hits);
        setArrayy(response.hits);
      });

    // setArray(response.data.hits);
    // console.log(array);
    // });
    // .catch((error) => console.log(error));
  }, []);
  console.log(arrayy);

  // .then((sss) => hits);
  return (
    <div className="App">
      <h1>App to find a pictures by keywords</h1>
      <label className="App_input">
        <span className="label">Describe a picture</span>
        <input
          type="text"
          name="search"
          placeholder="Search for"
          onChange={handleChange}
          value={search}
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </label>
      {/* <ul className="gallery">
        {arrayy.map((aa) => (
          <img src={aa.webformatURL} alt="11" />
        ))}
      </ul> */}
    </div>
  );
}

export default App;
