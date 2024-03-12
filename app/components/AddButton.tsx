import React, { useState } from "react";
import { InvoiceProduct } from "./InvoiceProduct";
import { FieldButton } from "./FieldButton";
import { Card } from "./Card";
export const AddButton: React.FC = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [date, setDate] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [salespersonName, setSalespersonName] = useState("");
  const [notes, setNotes] = useState("");
  const [searchProduct, setSearchProduct] = useState([]);
  const [addedCart, setAddedCart] = useState({});
  const [errors, setErrors] = useState({
    date: "",
    customerName: "",
    salespersonName: "",
    notes: "",
    addedCart: "",
  });
  const products = [
    {
      name: "Jordan 1",
      price: "1950000",
      quantity: "5",
    },
    {
      name: "Jordan 2",
      price: "1950000",
      quantity: "5",
    },
    {
      name: "Jordan 15",
      price: "2000000",
      quantity: "3",
    },
    {
      name: "Jordan 16",
      price: "1800000",
      quantity: "7",
    },
    {
      name: "Jordan 17",
      price: "2200000",
      quantity: "2",
    },
    {
      name: "Jordan 18",
      price: "1900000",
      quantity: "4",
    },
    {
      name: "Jordan 19",
      price: "2100000",
      quantity: "6",
    },
    {
      name: "Jordan 20",
      price: "2300000",
      quantity: "1",
    },
    {
      name: "Jordan 21",
      price: "2400000",
      quantity: "8",
    },
    {
      name: "Jordan 22",
      price: "1700000",
      quantity: "9",
    },
    {
      name: "Jordan 23",
      price: "2500000",
      quantity: "2",
    },
    {
      name: "Jordan 24",
      price: "2600000",
      quantity: "5",
    },
    {
      name: "Jordan 14",
      price: "1950000",
      quantity: "5",
    },
  ];
  const addToCart = (product) => {
    const source = { ...addedCart };
    if (typeof source[product.name] == "object") {
      if (source[product.name]["quantity"] <= product["quantity"] - 1) {
        source[product.name]["quantity"] =
          Number(source[product.name]["quantity"]) + 1;
      }
    } else {
      source[product.name] = {
        name: product.name,
        price: product.price,
        quantity: 1,
      };
    }
    setAddedCart(source);
  };

  const filterProduct = (e) => {
    const searchResult = products.filter((product) =>
      product.name.toLowerCase().includes(e.toLowerCase())
    );
    setSearchProduct(searchResult);
  };

  const handleButtonClick = () => {
    setShowDialog(true);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
    setErrors({
      date: "",
      customerName: "",
      salespersonName: "",
      notes: "",
    });
  };

  const handleSave = () => {
    let isValid = true;
    const newErrors = {
      date: "",
      customerName: "",
      salespersonName: "",
      notes: "",
    };

    // Validate each field
    if (date.trim() === "") {
      newErrors.date = "Date is required";
      isValid = false;
    } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(date)) {
      newErrors.date = "Date must be in dd/MM/YYYY format";
      isValid = false;
    }
    if (customerName.trim() === "") {
      newErrors.customerName = "Customer Name is required";
      isValid = false;
    }
    if (salespersonName.trim() === "") {
      newErrors.salespersonName = "Salesperson Name is required";
      isValid = false;
    }
    if (notes.trim() === "") {
      newErrors.notes = "Notes is required";
      isValid = false;
    }
    if (Object.keys(addedCart).length === 0) {
      newErrors.addedCart = "Product must not be empty";
      isValid = false;
    }

    // If any field is invalid, update the errors state and return
    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    // Save the data to a temporary list
    // You can implement the logic to save the data here
    // For simplicity, let's just log the data to the console

    // Reset the form fields
    setDate("");
    setCustomerName("");
    setSalespersonName("");
    setNotes("");

    // Close the dialog
    setShowDialog(false);
  };
  const labels = ["Date", "Customer Name", "Salesperson Name", "Notes"];
  const ids = ["date", "customerName", "salespersonName", "notes"];
  const productLabels = ["Image", "Name", "Price", "Quantity"];
  const productHeaderLabel = ["Result", "Added Product"];
  return (
    <div>
      {showDialog && (
        <div className="fixed bg-black w-screen h-screen top-0 left-0 opacity-65"></div>
      )}
      <button
        disabled={showDialog}
        onClick={handleButtonClick}
        className=" fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-blue-200 disabled:cursor-not-allowed"
      >
        Add Invoice <span>+</span>
      </button>

      {showDialog && (
        <div className="fixed z-20 top-1/2 left-1/2 transform -translate-x-1/2 text-black -translate-y-1/2 bg-white p-4 rounded shadow-lg w-10/12">
          <div className="flex space-x-5">
            {labels.map((label, index) => (
              <FieldButton
                key={index}
                value={[date, customerName, salespersonName, notes][index]}
                name={labels[index].toLowerCase()}
                label={labels[index]}
                setValue={
                  [setDate, setCustomerName, setSalespersonName, setNotes][
                    index
                  ]
                }
                errors={errors[ids[index]]}
              />
            ))}
            <button
              onClick={handleSave}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Save
            </button>
            <button
              onClick={handleDialogClose}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
          <div>
            <h1>Add Product</h1>
          </div>
          <div>
            <input
              id="searchProduct"
              type="text"
              placeholder="Search"
              className={`p-2 border border-gray-300 rounded ${
                errors.salespersonName ? "border-red-500" : ""
              }`}
              onChange={(e) => {
                filterProduct(e.target.value);
              }}
            />
            {errors.addedCart && (
              <p className="text-red-500 text-xs">{errors.addedCart}</p>
            )}
          </div>
          <div className="grid grid-cols-2 space-x-5">
            {productHeaderLabel.map((label, index) => (
              <div key={index} className="text-center">
                <Card
                  label={label}
                  headerLabels={productLabels}
                  onClick={[addToCart, addToCart][index]}
                  products={
                    [searchProduct, [...Object.values(addedCart)]][index]
                  }
                  isTotal={false}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
