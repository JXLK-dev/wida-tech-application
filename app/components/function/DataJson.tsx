import React, { Component } from "react";
import axios from "axios";

export class DataComponent extends Component {
  static getData = async (url) => {
    const response = await axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        return response.data;
        // Handle the response data here
        // this.setState({ data: response.data });
      })
      .catch((error) => {
        console.error(error.response.data);
        // Handle any errors here
        // this.setState({ error: error.message });
      });
    return response;
  };

  static postData(data, url) {
    // console.log(data);
    const posting = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: data.date,
        customerName: data.customerName,
        salespersonName: data.salespersonName,
        notes: data.notes,
        products: data.products,
      }),
    };
    axios
      .post(url, posting)
      .then((response) => {
        // Handle the response data here
        console.log(response.data);
        return true;
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error.response.data);
        return false;
      });
    return true;
  }
}
