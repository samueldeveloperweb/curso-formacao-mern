import mongoose from "mongoose";

const connectDatabase = () => {
  console.log("Wait connecting to the database");

  mongoose
    .connect(
      process.env.MONGODB_URI,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then((response) => console.log("MongoDB Connect with Success"))
    .catch((err) => console.log("Faild Connecting " + err));
};

export default connectDatabase;
