import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class AddTutorialComponent extends Component {
  constructor() {
    super(); // it will enable state object
    this.state = {
      title: "",
      description: "",
    };
    this.changeTitle = this.changeTitle.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
  }
  changeTitle(e) {
    this.setState({ title: e.target.value });
  }
  changeDescription(e) {
    this.setState({ description: e.target.value });
  }
  componentDidMount() {}
  render() {
    return (
      <div className="container">
        <h2>Add Tutorial</h2> <hr />
        <form>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={this.state.title}
              className="form-control"
              onChange={this.changeTitle}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              value={this.state.description}
              className="form-control"
              onChange={this.changeDescription}
            />
          </div>
          <input type="button" value="Save" className="btn btn-primary" />
          <input type="button" value="Reset" className="btn btn-secondary" />
        </form>
        <h1>
          Tutorial Details: {this.state.title + " " + this.state.description}
        </h1>
      </div>
    );
  }
}
