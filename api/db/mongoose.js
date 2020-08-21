const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost:27017/TaskManager", { useNewUrlParser: true })
  .then(() => {
    console.log("Berhasil connect mongodb");
  })
  .catch((e) => {
    console.log("Error euy");
    console.log(e);
  });

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

module.exports = {
  mongoose,
};
