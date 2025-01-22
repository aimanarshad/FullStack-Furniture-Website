/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"
import { useState } from "react";
import NewProduct from "@/action/CreateProduct";
import { Product } from "@/app/type/product";

export default function NextProduct() {
  const [productInfo, setProductInfo] = useState({
    id: 0,
    title: "",
    description: "",
    price: 0,
    productImage: "",
    tag: "", // This will store a comma-separated string
    dicountPercentage: "",
    isNew: "",
  });

  const handleProductInfo = (e: any) => {
    const { name, value } = e.target;
    setProductInfo((prevInfo) => ({
      ...prevInfo,
      [name]: name === "id" || name === "price" ? Number(value) : value,
    }));
  };

  // Handle the input for tags
  const handleTagsChange = (e: any) => {
    const { value } = e.target;
    setProductInfo((prevInfo) => ({
      ...prevInfo,
      tag: value, // Store the comma-separated string
    }));
  };

  const handleProductCreate = async () => {
    try {
      // Transform the comma-separated tags into an array
      const transformedProduct: Product = {
        id: productInfo.id,
        title: productInfo.title,
        description: productInfo.description,
        price: productInfo.price,
        productImage: productInfo.productImage,
        tags: productInfo.tag.split(",").map((tag: string) => tag.trim()), // Convert the string to an array
        dicountPercentage: productInfo.dicountPercentage,
        isNew: productInfo.isNew // Convert string "true" or "false" to boolean
        ,
        _id: ""
      };

      const success = await NewProduct(transformedProduct);
      if (success) {
        alert("Product created successfully!");
      } else {
        console.error("Product creation failed.");
      }
    } catch (error) {
      console.error("An error occurred during product creation:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create New Product</h2>
        <form className="space-y-4">
          <input
            type="text"
            name="id"
            placeholder="Product ID"
            value={productInfo.id}
            onChange={handleProductInfo}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={productInfo.title}
            onChange={handleProductInfo}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={productInfo.description}
            onChange={handleProductInfo}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={productInfo.price}
            onChange={handleProductInfo}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="productImage"
            placeholder="Product Image URL"
            value={productInfo.productImage}
            onChange={handleProductInfo}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Input for Tags */}
          <input
            type="text"
            name="tag"
            placeholder="Enter tags (comma separated)"
            value={productInfo.tag}
            onChange={handleTagsChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="dicountPercentage"
            placeholder="Discount Percentage"
            value={productInfo.dicountPercentage}
            onChange={handleProductInfo}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="isNew"
            placeholder="Is New? (true/false)"
            value={productInfo.isNew}
            onChange={handleProductInfo}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={handleProductCreate}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
}
