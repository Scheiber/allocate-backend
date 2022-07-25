// Dependencies
const app = require("./app.js");
require("dotenv").config();

// Port (allow use of Heroku's port or local port, depending on the environment)
const PORT = process.env.PORT || 3003;

// Listen
app.listen(PORT, () => console.log("Listening on port:", PORT));
