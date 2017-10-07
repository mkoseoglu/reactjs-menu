import React from "react";
import { withRouter } from "react-router";

class StorePicter extends React.Component {
  handleClick(event) {
    event.preventDefault();
    const storeId = this.StoreInput.value;
    const { history: { push } } = this.props;
    push(`/store/${storeId}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={e => this.handleClick(e)}>
        <h2>Lütfen bir mağaza giriniz.</h2>
        <input
          type="text"
          required
          placeholder="Mağaza Adı"
          ref={input => {
            this.StoreInput = input;
          }}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default withRouter(StorePicter);
