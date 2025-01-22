/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import Link from "next/link";
import { useState } from "react";

const TrackPage = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState<any>(null);
  const [error, setError] = useState("");

  const handleTrack = async () => {
    setError(""); // Clear any previous errors
    setTrackingData(null); // Clear previous results

    if (!trackingNumber) {
      setError("Please enter a tracking number.");
      return;
    }

    try {
      const response = await fetch(`/api/track?trackingNumber=${trackingNumber}`);
      const data = await response.json();
    
      if (response.ok && data.customer) {
        setTrackingData(data); // Store fetched data (including both customer and order)
      } else {
        setError(data.error || "No data found for this tracking number.");
      }
    } catch {
      setError("An error occurred while fetching the data. Please try again.");
    }
    
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Track Your Order</h1>
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <input
          type="text"
          placeholder="Enter your tracking number"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
        />
        <button
          onClick={handleTrack}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Track
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>

      {trackingData && (
        <div className="mt-6 p-6 bg-white rounded shadow w-full max-w-lg">
          <h2 className="text-xl font-bold">Tracking Details</h2>

          <p><strong>Tracking Number:</strong> {trackingData.customer.trackingNumber}</p>
          <p><strong>Name:</strong> {trackingData.customer.name}</p>
         
          <p><strong>Address:</strong> {trackingData.customer.address}</p>
          <p><strong>Weight:</strong> {trackingData.customer.weight}</p>

          <h3 className="mt-6 text-lg font-semibold">Order Details</h3>
          {trackingData.order ? (
            <>
              <p><strong>Order ID:</strong> {trackingData.order._id}</p>
              <p><strong>Order Date:</strong> {new Date(trackingData.order.order_date).toLocaleDateString()}</p>
              <p><strong>Items:</strong></p>
              <ul>
                {trackingData.order.items.map((item: any, index: number) => (
                  <li key={index}>
                    <strong>{item.product_name}</strong> - ${item.product_price} x {item.quantity}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p>No order found for this customer.</p>
          )}
        </div>
      )}

<button className="bg-yellow-400 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
  <Link href="/" className="inline-block">
    Go Back to Shopping
  </Link>
</button>

    </div>
  );
};

export default TrackPage;
