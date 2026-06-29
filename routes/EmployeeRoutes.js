const EmployeeRouter = require("express").Router();

const {encoder} = require("../middleware/index")
const { homepage,createpage,storepage, deletepage, editpage, updatepage} = require("../controllers/EmployeeController");

EmployeeRouter.get("/", homepage);
EmployeeRouter.get("/create", createpage);
EmployeeRouter.post("/store",encoder, storepage);
EmployeeRouter.get("/delete/:_id", deletepage);
EmployeeRouter.get("/edit/:_id",editpage);
EmployeeRouter.post("/update/:_id",encoder,updatepage)

module.exports = EmployeeRouter;