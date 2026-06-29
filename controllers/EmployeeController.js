const Employee = require("../models/Employee")
async function homepage(req, res) {
    try {
        let data = await Employee.find()
        console.log("employee", data)                            //api
        res.render("home.hbs", {
            title: "Home",
            data: data
        })
    } catch (error) {
        console.log(error)
        res.render("home.hbs", {
            title: "Home",
            data: []
        })
    }

}
function createpage(req, res) {              //API
    res.render("create.hbs", {
        title: "Create Record",
        data: {},
        errorMessage: {
            name: "",
            email: "",
            phone: "",
            designation: "",
            salary: ""

        }
    });
}
async function storepage(req, res) {

    try {
        var data = new Employee(req.body)
        await data.save()
      

        res.redirect("/")
    } catch (error) {

        let errorMessage = {}
        error?.errors?.name ? errorMessage.name = error?.errors?.name.message : ""
        error?.errors?.email ? errorMessage.email = error?.errors?.email.message : ""
        error?.errors?.phone ? errorMessage.phone = error?.errors?.phone.message : ""
        error?.errors?.designation ? errorMessage.designation = error?.errors?.designation.message : ""
        error?.errors?.salary ? errorMessage.salary = error?.errors?.salary.message : ""


        res.render("create.hbs", {
            title: "Create Record",         //API
            data: data,
            errorMessage: errorMessage



        });
    }
}

async function deletepage(req, res) {
    try {
        let data = await Employee.findOne({ _id: req.params._id })
        await data.deleteOne()
        res.redirect("/")
    } catch (error) {
        console.log(error)
        res.redirect("/")
    }
}
async function editpage(req, res) {
    try {
        let data = await Employee.findOne({ _id: req.params._id })

        res.render("update.hbs", {
            title: "update Record",
            data: data,
            errorMessage: {
                name: "",
                email: "",
                phone: "",
                designation: "",
                salary: ""

            }
        });

    } catch (error) {
        console.log(error)
        res.redirect("/")
    }
}
async function updatepage(req, res) {
    try {
        var data = await Employee.findOne({ _id: req.params._id })
        if (data) {
            data.name = req.body.name
            data.email = req.body.email
            data.phone = req.body.phone
            data.designation = req.body.designation
            data.salary = req.body.salary
            data.city = req.body.city
            data.state = req.body.state
            await data.save()
        }
        res.redirect("/")

    } catch (error) {
        console.log(error)
        let errorMessage = {}
        error?.errors?.name ? errorMessage.name = error?.errors?.name.message : ""
        error?.errors?.email ? errorMessage.email = error?.errors?.email.message : ""
        error?.errors?.phone ? errorMessage.phone = error?.errors?.phone.message : ""
        error?.errors?.designation ? errorMessage.designation = error?.errors?.designation.message : ""
        error?.errors?.salary ? errorMessage.salary = error?.errors?.salary.message : ""


        res.render("update.hbs", {
            title: "Create Record",         //API
            data,
            errorMessage



        });
    }
}
module.exports = {
    homepage: homepage,
    createpage: createpage,
    storepage: storepage,
    deletepage: deletepage,
    editpage: editpage,
    updatepage: updatepage
};