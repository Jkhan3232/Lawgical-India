const mongoose = require("mongoose");

const db = "mongodb://localhost:27017/Webdev";
mongoose
  .connect(db)
  .then(() => console.log("Conection Successfull..."))
  .catch((err) => console.log(err));

// mongoose.connect("mongodb://localhost:27017/Webdev", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
