import React from "react";

interface AddProductProps {
  // Define any props you need for your component here
}

const AddProduct: React.FC<AddProductProps> = () => {
  // Add your component logic here

  return (
    <div>
      <div>
        <h1>Add Product</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="p-2 border border-gray-300 rounded"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
