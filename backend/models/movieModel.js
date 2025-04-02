// import mongoose from "mongoose";

// const reviewSchema = new mongoose.Schema({
//   user: {
//     type: String,
//     required: true,
//   },
//   reviewText: {
//     type: String,
//     required: true,
//   },
//   rating: {
//     type: Number,
//     required: true,
//     min: 1,
//     max: 10,
//   },
// });

// const movieSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   rating: {
//     type: Number,
//     required: true,
//   },
//   image_url: {
//     type: String,
//     required: true,
//   },
//   reviews: [reviewSchema],
// });

// const Movie = mongoose.model("Movie", movieSchema);

// export default Movie;



import mongoose from "mongoose";

// Define the Review Schema
const reviewSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  reviewText: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Define the Movie Schema
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image_url: { type: String },
  rating: { type: Number },
  reviews: [reviewSchema],  // Embedding the Review Schema
});

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;




