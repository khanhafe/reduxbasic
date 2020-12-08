import React from "react";
import { Component } from "react";
import "./styles.css";

import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.posts}
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

const mapStateToProps = (states) => {
  return { posts: states.mydata };
};

export default connect(mapStateToProps)(App);
