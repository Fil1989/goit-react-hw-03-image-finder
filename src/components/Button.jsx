import { Component } from "react";
class Button extends Component {
  render() {
    return (
      <button type="button" onClick={this.props.onLoadMore} className="Button">
        Load more
      </button>
    );
  }
}
export default Button;
