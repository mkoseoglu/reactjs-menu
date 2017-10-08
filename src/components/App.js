import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes"
import base from "../base"

class App extends React.Component {
  constructor() {
    super();
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.state = {
      fishes: [],
      order: {}
    }
    //console.log(this.state.fishes);
  }
  componentWillMount() {
    this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
      context: this,
      state: 'fishes',
      asArray: true
    });

  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish(fish) {
   const fishes = [...this.state.fishes, {id:Date.now(), ...fish}];

   this.setState({fishes })
  }

  loadSamples() {
   const load = [...this.state.fishes, ...sampleFishes];
    this.setState({fishes: load})
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagLine="Merhaba, ben tagLine." cool={true}/>
          <ul>
            {this.state.fishes.map(i => <Fish key={i.key} details={i}/>)}
          </ul>
          <Order storeId={this.props.match.params.storeId} fishLast={this.state.fishes}/>
          <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
        </div>
      </div>
    );
  }
}

export default App;
