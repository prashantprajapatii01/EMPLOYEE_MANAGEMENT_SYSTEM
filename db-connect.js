const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://employee_management:employeedataofpintu@cluster0.bo8msf2.mongodb.net/?appName=Cluster0"
)
.then(() => {
    console.log("Database connected");
})
.catch((error) => {
    console.log(error);
});