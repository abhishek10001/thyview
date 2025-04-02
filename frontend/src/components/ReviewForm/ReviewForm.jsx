// import React from "react";
// import "./ReviewForm.css";
// import { useSelector } from "react-redux";
// import { useState } from "react";
// import { usePostReviewMutation } from "../../slices/movieApiSlice";

// const ReviewForm = ({ movieId, onReviewSubmit }) => {
//   const { userInfo } = useSelector((state) => state.auth);
//   const [reviewText, setReviewText] = useState("");
//   const [rating, setRating] = useState("");
//   const [postReview] = usePostReviewMutation();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const reviewData = {
//         user: userInfo.name,
//         reviewText: reviewText,
//         rating: rating,
//       };

//       const res = await postReview({ id: movieId, data: reviewData }).unwrap();
//       setReviewText("");
//       setRating("");
//       onReviewSubmit(res.data);
//     } catch (error) {
//       console.error("Error creating review", error);
//     }
//   };

//   return (
//     <div>
//       <div className="review-form-container">
//         <div className="container__item">
//           <form className="form" onSubmit={handleSubmit}>
//             <input
//               type="number"
//               className="form__field__one"
//               placeholder="Rating"
//               value={rating}
//               onChange={(e) => setRating(e.target.value)}
//             />
//             <input
//               type="text"
//               className="form__field"
//               placeholder="Write Your Review"
//               value={reviewText}
//               onChange={(e) => setReviewText(e.target.value)}
//             />
//             <button
//               type="submit"
//               className="btn btn--primary btn--inside uppercase"
//             >
//               POST
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewForm;


import React, { useState } from "react";
import { useSelector } from "react-redux";
import { usePostReviewMutation } from "../../slices/movieApiSlice";
import "./ReviewForm.css";

const ReviewForm = ({ movieId, onReviewSubmit }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");
  const [error, setError] = useState(null);
  const [postReview] = usePostReviewMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!rating || !reviewText) {
      setError("Please fill in both the rating and review fields.");
      return;
    }
    if (rating < 1 || rating > 10) {
      setError("Rating must be between 1 and 10.");
      return;
    }

    try {
      const reviewData = {
        user: userInfo?.name || "Anonymous",  // Default to "Anonymous" if user info is missing
        reviewText,
        rating: Number(rating),  // Ensure rating is a number
      };

      const res = await postReview({ id: movieId, data: reviewData }).unwrap();
      onReviewSubmit(res);  // Assuming `res` contains the new review

      // Reset form fields and error state
      setReviewText("");
      setRating("");
      setError(null);
    } catch (err) {
      console.error("Error creating review:", err);
      setError("Failed to submit review. Please try again.");
    }
  };

  return (
    <div className="review-form-container">
      <div className="container__item">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="number"
            className="form__field__one"
            placeholder="Rating (1-10)"
            value={rating}
            min="1"
            max="10"
            onChange={(e) => setRating(e.target.value)}
            required
          />
          <textarea
            className="form__field"
            placeholder="Write Your Review"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            rows="4"
            required
          />
          {error && <div className="error-message">{error}</div>}  {/* Display error messages */}
          <button
            type="submit"
            className="btn btn--primary btn--inside uppercase"
          >
            POST
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
