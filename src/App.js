import React, { Component, useState } from "react";
import "./App.css";
import ChildComponent from "./components/ChildComponent";

export class Comp2 extends Component {
  componentWillUnmount(){
    this.props.closeAnak()
  }
  render() {
    return <div>
      <h1>TAMPILKAN:</h1>
      {JSON.stringify(this.props.biodata)}
      <br/>
      <button onClick={()=>this.props.closeHasil()}>Close</button>
    </div>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "budi",
    };
    console.log(document.URL);
  }
  componentDidMount() {}
  gantiNama = (value) => {
    this.setState({ nama: value });
  };
  render() {
    console.log("render");
    const { nama } = this.state;
    return (
      <div className="parentComponent">
        <div className="wrapper">
          <h1>BAPAK!!</h1>
          Nama Bapak: {this.state.nama}
          <br />
          <input
            type="text"
            name="nama"
            placeholder="Nama Bapak"
            onChange={(e) => this.setState({ nama: e.target.value })}
            value={this.state.nama}
          />
          <br />
          <ChildComponent nama={nama} ganti={this.gantiNama} />
        </div>
      </div>
    );
  }
}
export default App;
