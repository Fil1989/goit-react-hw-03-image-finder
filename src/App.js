import { Component } from "react";
// import axios from "axios";
import Searchbar from "./components/Searchbar";
// import SearchIcon from "@material-ui/icons/Search";
import ImageGallery from "./components/ImageGallery";
import fetchThePictures from "./serverApi";
import Button from "./components/Button";
import Modal from "./components/Modal";

class App extends Component {
  state = {
    search: "",
    array: [],
    modal: {
      open: false,
      imageSrc: "",
    },
  };

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    fetchThePictures.resetPage();
    fetchThePictures.setQuery(e);
    fetchThePictures.fetchFunction().then((res) => {
      this.setState({ array: res.data.hits });
    });
    console.log(this.state);
  };
  handleLoadMore = () => {
    fetchThePictures.incrementOfPage();
    fetchThePictures.fetchFunction().then((res) => {
      this.setState((prevState) => ({
        array: [...prevState.array, ...res.data.hits],
      }));
    });
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  handleModalOpen = (e) => {
    this.setState({
      modal: { open: true, imageSrc: e.target.src, alt: e.target.alt },
    });
  };
  handleCloseModal = (e) => {
    console.dir(e.target);
    if (e.target.nodeName !== "IMG") {
      this.setState({
        modal: { open: false },
      });
    }
  };
  render() {
    return (
      <div className="App">
        <Searchbar
          onChange={this.handleChange}
          search={this.state.search}
          onSubmit={this.handleSubmit}
        />

        <ImageGallery
          array={this.state.array}
          onModalOpen={this.handleModalOpen}
        />
        <Button onLoadMore={this.handleLoadMore} />
        {this.state.modal.open && (
          <Modal
            imageSrc={this.state.modal.imageSrc}
            alt={this.state.modal.alt}
            closeModal={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}

export default App;
