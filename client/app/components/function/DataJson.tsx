import React, { Component } from "react";
import axios from "axios";

export class DataComponent extends Component {
  static getData = async (url) => {
    const response = await axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.error(error.response.data);
      });
    return response;
  };

  static postData(data, url) {
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
        console.log(response.data);
        return true;
      })
      .catch((error) => {
        console.error(error.response.data);
        return false;
      });
    return true;
  }
}
