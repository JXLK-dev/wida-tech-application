import React, { Component } from "react";
import axios from "axios";

export class DataComponent extends Component {
  static getData = async () => {
    const response = await axios
      .get("http://localhost:3000/api/get-invoice")
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

  static postData(data) {
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
      .post("http://localhost:3000/api/insert-invoice", posting)
      .then((response) => {
        // Handle the response data here
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error.response.data);
      });
    return;
  }
}
