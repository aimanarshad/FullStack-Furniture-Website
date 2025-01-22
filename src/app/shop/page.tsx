/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import Image from "next/image";
import Features from "../component/features";
import { useState, useEffect } from "react";
import { urlFor } from "@/sanity/lib/image";
import { getProducts } from "@/utils/fetchData";
import Link from "next/link";
import PriceFilter from "../component/filter"; // Import the PriceFilter component
import type { Product } from "../type/product";

const fetchProducts = async () => {
  const products = await getProducts(); // Fetch products from Sanity
  return products;
};

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]); // State to store fetched products
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Filtered products based on search or price
  const [searchQuery, setSearchQuery] = useState(""); // State to handle search query
  const [minPrice, setMinPrice] = useState<number>(0); // Minimum price for filtering
  const [maxPrice, setMaxPrice] = useState<number>(1000); // Maximum price for filtering
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility

  // Fetch the products when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await fetchProducts(); // Fetch the products
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts); // Initially show all products
    };
    fetchData();
  }, []); // Empty dependency array, so it only runs on mount

  // Handle search logic for filtering products
  const handleSearch = () => {
    const query = searchQuery.toLowerCase();

    const filtered = products.filter((product: Product) => {
      const nameMatch = product?.title.toLowerCase().includes(query);
      const tagsMatch =
        product?.tags?.some((tag: string) => tag?.toLowerCase().includes(query)) || false;

      return nameMatch || tagsMatch;
    });

    setFilteredProducts(filtered);
    setIsModalOpen(false); // Close modal after search
  };

  // Apply price filter logic
  const applyPriceFilter = (minPrice: number, maxPrice: number) => {
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);

    const filtered = products.filter((product) => {
      return product.price >= minPrice && product.price <= maxPrice;
    });

    setFilteredProducts(filtered);
  };

  return (
    <>
      <div
        style={{ backgroundImage: "url('/img.jpg')" }}
        className="bg-cover bg-center h-[330px] opacity-80 w-full relative mt-[100px]"
      >
        <div className="absolute top-[60px] left-[50%] transform -translate-x-1/2">
          <Image className="w-[77px] h-[77px]" src="/logo.png" alt="logo" width={70} height={60} />
          <h1 className="text-[48px] font-medium leading-[72px] text-5xl text-left">Shop</h1>
          <div className="flex gap-7 items-center text-sm mt-[295px]">
            <span className="font-bold">Home</span>
            <Image
              src="/arrow.png"
              alt="arrow"
              width={100}
              height={100}
              className="w-[30px] h-[15px]"
            />
            <span className="font-bold text-black">Shop</span>
          </div>
        </div>
      </div>

      <main>
        <div className="font-sans p-8">
          {/* Modal Trigger Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="mb-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Open Search
          </button>

          {/* Modal for Search */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg w-96">
                <h2 className="text-xl font-bold mb-4">Search Products</h2>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products..."
                  className="w-full p-2 border rounded mb-4"
                />
                <div className="flex justify-end">
                  <button
                    onClick={handleSearch}
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                  >
                    Search
                  </button>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="ml-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Price Filter Component */}
          <PriceFilter onFilterChange={applyPriceFilter} />

          {/* Product Grid Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item: Product) => (
                <div
                  key={item.id}
                  className="relative bg-white shadow-lg rounded-lg p-4 border border-gray-200 overflow-hidden group"
                >
                  {/* Image with hover effect */}
                  <div className="relative">
                    <Image
                      src={urlFor(item.productImage).url()}
                      alt={item.title}
                      width={400}
                      height={400}
                      className="rounded-lg mx-auto mb-4"
                    />
                    {/* View Details Button (hidden until hover) */}
                    <Link
                      href={`/shop/${item.id}`}
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition duration-300"
                    >
                      View Details
                    </Link>
                  </div>

                  {/* Product Info */}
                  <div className="mt-4">
                    <h2 className="text-xl font-bold">{item.title}</h2>
                    <p className="text-lg font-semibold text-gray-800">${item.price}</p>
                    <p className="text-xs text-red-500">
                      Discount: {item.dicountPercentage ? `${item.dicountPercentage}%` : "N/A"}
                    </p>
                    <p
                      className={`text-sm font-medium ${
                        item.isNew ? "text-green-600" : "text-gray-500"
                      }`}
                    >
                      {item.isNew ? "New Product" : "Existing Product"}
                    </p>
                    <p className="text-sm text-gray-600">
                      Tags:{" "}
                      {item.tags && item.tags.length > 0
                        ? item.tags.join(", ")
                        : "No tags available"}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>No products found matching your search or price filter.</p>
            )}
          </div>
        </div>
      </main>

      <Features />
    </>
  );
}
