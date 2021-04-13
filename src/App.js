import { Component } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import fetchThePictures from "./serverApi";
import Button from "./components/Button";
import Modal from "./components/Modal";
import Loader from "react-loader-spinner";

class App extends Component {
  state = {
    search: "",
    array: [],
    modal: {
      open: false,
      imageSrc: "",
    },
    loading: false,
    scroll: 0,
    button: false,
  };

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    fetchThePictures.resetPage();
    fetchThePictures.setQuery(e);
    this.setState({ loading: true });

    fetchThePictures
      .fetchFunction()
      .then((res) => {
        this.setState({ array: res.data.hits, loading: false, button: true });
      })
      .catch((error) => console.log(error));
  };
  handleLoadMore = () => {
    fetchThePictures.incrementOfPage();
    this.setState({
      loading: true,
      scroll: document.documentElement.scrollHeight,
    });
    fetchThePictures
      .fetchFunction()
      .then((res) => {
        this.setState((prevState) => ({
          array: [...prevState.array, ...res.data.hits],
        }));
        window.scrollTo({
          top: this.state.scroll - 190,
          behavior: "smooth",
        });
        this.setState({ loading: false });
      })
      .catch((error) => console.log(error));
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
        <section className="spinner">
          {this.state.loading && (
            <Loader type="Hearts" color="#00BFFF" height={100} width={100} />
          )}
        </section>

        {this.state.button && !!this.state.array.length && (
          <Button onLoadMore={this.handleLoadMore} />
        )}

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
