// Import app
import app from "./app";


const PORT = process.env.PORT || 3000;
// Listen to Port ( default: 3001)
app.listen(PORT, () => {
    console.log("I am in "+ process.env.NODE_ENV + " environment")
    console.log(`[Server@${PORT}] On`);
});
