require('dotenv').config()
const app = require("./services/server.service");
const mongoService = require("./services/mongoose.service");

mongoService.dbConnect();
app.start();