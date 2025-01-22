import { useState } from "react";

// Define the types for reviews
interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
}

interface ProductReviewsProps {
  reviews: Review[];
  onAddReview: (newReview: Review) => void;
}

const ProductReviews: React.FC<ProductReviewsProps> = ({ reviews, onAddReview }) => {
  const [newReview, setNewReview] = useState<string>("");
  const [newRating, setNewRating] = useState<number>(1);
  const [newName, setNewName] = useState<string>("");

  // Handle review submission
  const handleReviewSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validate input fields
    if (!newName.trim()) {
      alert("Please enter your name.");
      return;
    }
    if (!newReview.trim()) {
      alert("Please enter your review.");
      return;
    }

    const review: Review = {
      id: (reviews.length + 1).toString(),
      user: newName, // Include the user's name
      rating: newRating,
      comment: newReview,
    };
    onAddReview(review);

    // Reset form fields
    setNewReview("");
    setNewRating(1);
    setNewName("");
  };

  return (
    <div className="reviews mt-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Customer Reviews</h2>

      {/* Reviews List */}
      <div className="reviews-list mb-6">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div
              key={review.id}
              className="review mb-4 p-4 bg-gray-100 rounded-lg shadow-md"
            >
              <p className="font-semibold">{review.user}</p>
              <p className="text-yellow-500">
                {"★".repeat(review.rating)}{" "}
                {"☆".repeat(5 - review.rating)} {/* Display the rating */}
              </p>
              <p className="text-gray-700 mt-2">{review.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet. Be the first to review this product!</p>
        )}
      </div>

      {/* Add Review Form */}
      <form
        onSubmit={handleReviewSubmit}
        className="review-form bg-gray-50 p-6 rounded-lg shadow-md"
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Leave a Review</h3>

        {/* Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Rating Input */}
        <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-700 mb-2">
            Rating
          </label>
          <select
            id="rating"
            value={newRating}
            onChange={(e) => setNewRating(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value={1}>1 Star</option>
            <option value={2}>2 Stars</option>
            <option value={3}>3 Stars</option>
            <option value={4}>4 Stars</option>
            <option value={5}>5 Stars</option>
          </select>
        </div>

        {/* Review Input */}
        <div className="mb-4">
          <label htmlFor="review" className="block text-gray-700 mb-2">
            Review
          </label>
          <textarea
            id="review"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            rows={4}
            placeholder="Write your review here..."
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ProductReviews;
