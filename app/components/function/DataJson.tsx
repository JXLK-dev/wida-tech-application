import React, { Component } from "react";
import axios from "axios";

export class DataComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null,
    };
  }

  componentDidMount() {
    this.getData();
    this.postData();
  }

  getData() {
    axios
      .get("https://api.example.com/data")
      .then((response) => {
        // Handle the response data here
        this.setState({ data: response.data });
      })
      .catch((error) => {
        // Handle any errors here
        this.setState({ error: error.message });
      });
  }

  postData() {
    const data = {
      // Add your POST data here
    };

    axios
      .post("sql6.freemysqlhosting.net")
      .then((response) => {
        // Handle the response data here
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  }

  render() {
    const { data, error } = this.state;

    return (
      <div>
        {/* Your component JSX goes here */}
        {data && <div>Data: {data}</div>}
        {error && <div>Error: {error}</div>}
      </div>
    );
  }
}
