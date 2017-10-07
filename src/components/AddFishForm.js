import React from "react";

class AddFishForm extends React.Component {
  CreateFish(event) {
    event.preventDefault();
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value
    }
    const a = [
      this.name.value,
      this.price.value,
      this.status.value,
      this.desc.value,
      this.image.value
    ]

    console.log(a);
    this.props.addFish(fish);

  }

  render() {
    return (
      <form className="fish-edit" onSubmit={e => this.CreateFish(e)}>
        <input ref={input => {
          this.name = input
        }} type="text" placeholder="Name"/>
        <input ref={input => {
          this.price = input
        }} type="text" placeholder="Price"/>
        <select ref={input => {
          this.status = input
        }}>
          <option value="avaible">avaible</option>
          <option value="unavaible">unavaible</option>
        </select>
        <input ref={input => {
          this.desc = input
        }} type="text" placeholder="Desc"/>
        <input ref={input => {
          this.image = input
        }} type="text" placeholder="İmage"/>
        <button type="submit">AddFishForm</button>
      </form>
    )

  }
}

export default AddFishForm;
