import mongoose from "mongoose";
import dotenv from "dotenv";
import csvtojson from "csvtojson";
import Movie from "../models/movieModel.js";  // Import your Movie model

// Load environment variables from .env file
dotenv.config();

// Access environment variables
const MONGO_URI = process.env.MONGO_URI;  // MongoDB URI from .env
const CSV_FILE_PATH = process.env.CSV_FILE_PATH;  // CSV file path from .env

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

// Function to import CSV data to MongoDB
const importCSVData = async () => {
  try {
    const data = await csvtojson().fromFile(CSV_FILE_PATH);

    // Loop through the CSV data and insert into MongoDB
    for (const row of data) {
      const { name, description, rating, image_url, review_user, review_text, review_rating } = row;

      // Find or create the movie
      let movie = await Movie.findOne({ name });

      if (!movie) {
        // Create a new movie if it doesn't exist
        movie = new Movie({
          name,
          description,
          rating: parseFloat(rating),
          image_url,
          reviews: []
        });
      }

      // Add review to the movie
      movie.reviews.push({
        user: review_user,
        reviewText: review_text,
        rating: parseInt(review_rating),
      });

      // Save the movie with the reviews
      await movie.save();
    }

    console.log("CSV data successfully imported into MongoDB!");
  } catch (error) {
    console.error("Error importing CSV data:", error);
  }
};

// Run the script
const run = async () => {
  await connectDB();
  await importCSVData();
  mongoose.connection.close();  // Close the connection after importing data
};

run();
