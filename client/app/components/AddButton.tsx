import React, { useState } from "react";
import { InvoiceProduct } from "./InvoiceProduct";
import { FieldButton } from "./FieldButton";
import { Card } from "./Card";
import { ComponentFunctions } from "./function/Function";
import { AlertDialog } from "./AlertDialog";
import { DataComponent } from "./function/DataJson";
import { PopUpDialog } from "./PopUpDialog";

export const AddButton: React.FC = (props) => {
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
  const [notification, setNotification] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState(false);
  const products = [
    {
      imgSrc:
        "https://img-global.cpcdn.com/recipes/d5fdeda7a69719d9/1200x630cq70/photo.jpg",
      name: "Jordan 1",
      price: "1950000",
      quantity: "5",
    },
    {
      imgSrc:
        "https://img-global.cpcdn.com/recipes/d5fdeda7a69719d9/1200x630cq70/photo.jpg",
      name: "Jordan 2",
      price: "1950000",
      quantity: "5",
    },
    {
      imgSrc:
        "https://img-global.cpcdn.com/recipes/d5fdeda7a69719d9/1200x630cq70/photo.jpg",
      name: "Jordan 15",
      price: "2000000",
      quantity: "3",
    },
    {
      imgSrc:
        "https://img-global.cpcdn.com/recipes/d5fdeda7a69719d9/1200x630cq70/photo.jpg",
      name: "Jordan 16",
      price: "1800000",
      quantity: "7",
    },
    {
      imgSrc:
        "https://img-global.cpcdn.com/recipes/d5fdeda7a69719d9/1200x630cq70/photo.jpg",
      name: "Jordan 17",
      price: "2200000",
      quantity: "2",
    },
    {
      imgSrc:
        "https://img-global.cpcdn.com/recipes/d5fdeda7a69719d9/1200x630cq70/photo.jpg",
      name: "Jordan 18",
      price: "1900000",
      quantity: "4",
    },
    {
      imgSrc:
        "https://img-global.cpcdn.com/recipes/d5fdeda7a69719d9/1200x630cq70/photo.jpg",
      name: "Jordan 19",
      price: "2100000",
      quantity: "6",
    },
    {
      imgSrc:
        "https://img-global.cpcdn.com/recipes/d5fdeda7a69719d9/1200x630cq70/photo.jpg",
      name: "Jordan 20",
      price: "2300000",
      quantity: "1",
    },
    {
      imgSrc:
        "https://img-global.cpcdn.com/recipes/d5fdeda7a69719d9/1200x630cq70/photo.jpg",
      name: "Jordan 21",
      price: "2400000",
      quantity: "8",
    },
    {
      imgSrc:
        "https://img-global.cpcdn.com/recipes/d5fdeda7a69719d9/1200x630cq70/photo.jpg",
      name: "Jordan 22",
      price: "1700000",
      quantity: "9",
    },
    {
      imgSrc:
        "https://img-global.cpcdn.com/recipes/d5fdeda7a69719d9/1200x630cq70/photo.jpg",
      name: "Jordan 23",
      price: "2500000",
      quantity: "2",
    },
    {
      imgSrc:
        "https://img-global.cpcdn.com/recipes/d5fdeda7a69719d9/1200x630cq70/photo.jpg",
      name: "Jordan 24",
      price: "2600000",
      quantity: "5",
    },
    {
      imgSrc:
        "https://img-global.cpcdn.com/recipes/d5fdeda7a69719d9/1200x630cq70/photo.jpg",
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
        imgSrc: product.imgSrc,
        name: product.name,
        price: product.price,
        quantity: 1,
      };
    }
    setAddedCart(source);
  };

  const deleteFromCart = (product) => {
    const source = { ...addedCart };
    if (source[product.name]["quantity"] > 1) {
      source[product.name]["quantity"] = source[product.name]["quantity"] - 1;
    } else {
      delete source[product.name];
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
    } else if (
      !/^\d{4}\/\d{2}\/\d{2}$/.test(date) &&
      date.trim().slice(4, 6) !== ""
    ) {
      newErrors.date = "Date must be in YYYY/MM/dd format";
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

    // Close the dialog
    setConfirmDialog(true);
  };
  const handleAlertConfirm = async () => {
    // Implement your logic for confirm action here
    const data = {
      date: date,
      customerName: customerName,
      salespersonName: salespersonName,
      notes: notes,
      products: Object.values(addedCart),
    };
    console.log(data);
    setLoading(true);
    props.refresh(false);
    const success = await DataComponent.postData(
      data,
      "http://localhost:3000/api/insert-invoice"
    );
    props.refresh(true);
    setLoading(false);
    setNotification(true);
    setConfirmDialog(false);
    setShowDialog(false);
    // Reset the form fields
    setDate("");
    setCustomerName("");
    setSalespersonName("");
    setNotes("");
    setAddedCart({});
  };

  const handleAlertCancel = () => {
    // Implement your logic for cancel action here
    setConfirmDialog(false);
  };
  const labels = ["Date", "Customer Name", "Salesperson Name", "Notes"];
  const ids = ["date", "customerName", "salespersonName", "notes"];
  const productLabels = [
    ["Image", "Name", "Price", "Stocks"],
    ["Image", "Name", "Price", "Quantity", "Total"],
  ];
  const productHeaderLabel = ["Result", "Added Product"];
  return (
    <div>
      <button
        disabled={showDialog}
        onClick={handleButtonClick}
        className=" fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-blue-200 disabled:cursor-not-allowed"
      >
        Add Invoice <span>+</span>
      </button>
      {loading && <PopUpDialog label="Loading..." />}
      {notification && (
        <PopUpDialog
          label="Data has been saved"
          onClick={() => {
            setNotification(false);
          }}
        />
      )}
      {showDialog && (
        <div className="fixed bg-black w-screen h-screen top-0 left-0 opacity-65"></div>
      )}
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

          <div className="flex space-x-5">
            <div>
              <h1>Add Product:</h1>
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
            <div>
              <h1>Grand Total:</h1>
              <h1>
                {ComponentFunctions.formatCurrency(
                  Object.values(addedCart).reduce((total, product) => {
                    return (
                      total + Number(product.price) * Number(product.quantity)
                    );
                  }, 0)
                )}
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-2 space-x-5">
            {productHeaderLabel.map((label, index) => (
              <div key={index} className="text-center">
                <Card
                  label={label}
                  headerLabels={productLabels[index]}
                  onClick={[addToCart, deleteFromCart][index]}
                  products={
                    [searchProduct, [...Object.values(addedCart)]][index]
                  }
                  isTotal={[false, true][index]}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {confirmDialog && (
        <div className="fixed bg-black w-screen h-screen top-0 left-0 opacity-80 z-30"></div>
      )}
      {confirmDialog && (
        <div className="fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 text-black -translate-y-1/2 bg-white p-4 rounded shadow-lg w-1/6">
          <AlertDialog
            subtitle={
              "The Grand Total is:" +
              ComponentFunctions.formatCurrency(
                Object.values(addedCart).reduce((total, product) => {
                  return (
                    total + Number(product.price) * Number(product.quantity)
                  );
                }, 0)
              )
            }
            onConfirm={handleAlertConfirm}
            onCancel={handleAlertCancel}
            title="Confirm Submission"
          />
        </div>
      )}
    </div>
  );
};
