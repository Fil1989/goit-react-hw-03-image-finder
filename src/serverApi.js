import axios from "axios";

const fetchThePictures = {
  page: 1,
  query: "",
  fetchFunction() {
    axios.defaults.baseURL = "https://pixabay.com/api";
    if (this.query !== "") {
      return axios.get(
        `/?key=20277592-c9806cff80bff398502402406&q=${this.query}&page=${this.page}&image_type=photo&orientation=horizontal&per_page=12`
      );
    } else {
      return axios.get(
        `/?key=20277592-c9806cff80bff398502402406&q=nhugyftrdyukghl&page=${this.page}&image_type=photo&orientation=horizontal&per_page=12`
      );
    }
  },
  incrementOfPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
  setQuery(e) {
    this.query = e.currentTarget[1].value;
  },
};
export default fetchThePictures;
