import mongoose from "mongoose";

export const connectDB = async () => {
  const connectionUrl =
    "mongodb+srv://sawan:FFZtixnQduKyimZk@cluster0.7imlfcq.mongodb.net/blog-app";
  mongoose
    .connect(connectionUrl)
    .then(() => console.log("DB Connected"))
    .catch((error) => {
      console.log("DB cONNECTION FAILED");
      console.error(error);
    });
};
export default connectDB;
