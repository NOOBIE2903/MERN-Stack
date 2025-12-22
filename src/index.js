import dotenv from "dotenv/config";
import connectDB from "./db/index.js";
// dotenv.config({ path: `./env` });

connectDB()
  .then(() => {
    const server = app.listen(process.env.PORT || 8000, () => {
      console.log("Running on port: ", process.env.PORT);
    });

    server.on("error", (error) => {
      console.log("Error running the server: ", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("Error during DB connection !!", err);
    throw err;
  });

// import express from "express";
// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Error: ", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is litening on ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("Erorr: ", error);
//     throw error;
//   }
// })();
