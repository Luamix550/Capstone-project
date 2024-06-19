import app from "./config/app.js";
import { connectDb } from "./config/db.js";

// Get the port number from environment variables
const PORT = process.env.PORT;
// Connect to the MongoDB database
connectDb();
// Start the Express server
app.listen(PORT || 3000);

console.log("Server list on Port", PORT);
