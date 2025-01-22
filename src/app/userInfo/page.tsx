/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import FeedbackDialog from "../component/feetback";

// Function to fetch the latest user data
const fetchLatestUserData = async () => {
  const userData = await client.fetch(`
    *[_type == "customer"] | order(_createdAt desc)[0]{
      _id,
      name,
      address,
      phone,
      email
    }
  `);
  return userData;
};

export default function UserInfo() {
  const [user, setUser] = useState<any>(null);
  const [isFeedbackOpen, setFeedbackOpen] = useState(false);

  useEffect(() => {
    // Fetch the latest user data when the component mounts
    fetchLatestUserData().then((data) => {
      setUser(data);
    });
  }, []);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  const openFeedbackDialog = () => {
    setFeedbackOpen(true);
  };

  const closeFeedbackDialog = () => {
    setFeedbackOpen(false);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-8 px-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">User Information</h1>
        <div className="space-y-2">
          <p className="text-gray-700">
            <span className="font-medium">Name:</span> {user.name}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Address:</span> {user.address}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Phone:</span> {user.phone}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Email:</span> {user.email}
          </p>
        </div>

        <Link
          href={`/userInfo/${user._id}`}
          className="block mt-4 text-center text-blue-500 hover:underline"
        >
          View Order
        </Link>

        <button
          className="bg-blue-500 text-white w-full px-4 py-2 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          onClick={openFeedbackDialog}
        >
          Give Feedback
        </button>
      </div>

      {/* Feedback Dialog */}
      <FeedbackDialog isOpen={isFeedbackOpen} onClose={closeFeedbackDialog} />
    </div>
  );
}
