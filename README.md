# Employee Management System

A full-stack Employee Management System built using **Node.js, Express.js, MongoDB Atlas, Mongoose, Handlebars (HBS), Bootstrap 5, and DataTables**.

## 🌐 Live Demo

https://employeemanagementsystem-production-adbc.up.railway.app/

## 📂 GitHub Repository

https://github.com/prashantprajapatii01/EMPLOYEE_MANAGEMENT_SYSTEM

---

## 📸 Project Screenshot

![Employee Management System](./screenshot.png)

---

## 🚀 Features

* Add Employee Records
* View Employee Records
* Update Employee Details
* Delete Employee Records
* Form Validation
* Search Employees
* Pagination with DataTables
* Responsive Bootstrap UI
* MongoDB Atlas Integration
* Railway Deployment

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* Bootstrap 5
* Handlebars (HBS)
* DataTables

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Deployment

* Railway

---

## 📁 Project Structure

```text
CRUD/
│
├── controllers/
│   └── EmployeeController.js
│
├── middleware/
│   └── index.js
│
├── models/
│   └── Employee.js
│
├── routes/
│   ├── EmployeeRoutes.js
│   └── Router.js
│
├── views/
│   ├── create.hbs
│   ├── update.hbs
│   ├── home.hbs
│   └── partials/
│       ├── header.hbs
│       ├── navbar.hbs
│       └── footer.hbs
│
├── db-connect.js
├── index.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/prashantprajapatii01/EMPLOYEE_MANAGEMENT_SYSTEM.git
```

### Navigate to Project

```bash
cd EMPLOYEE_MANAGEMENT_SYSTEM
```

### Install Dependencies

```bash
npm install
```

### Start Application

```bash
npm run dev
```

Server will start on:

```text
http://localhost:8000
```

---

## Database Configuration

### Local MongoDB

```js
mongoose.connect("mongodb://localhost:27017/CRUD")
```

### MongoDB Atlas

```js
mongoose.connect(process.env.MONGO_URI)
```

---

## 📚 What I Learned

* MVC Architecture
* Express Routing
* CRUD Operations
* MongoDB & Mongoose
* Server Side Rendering with HBS
* Form Validation
* Git & GitHub Workflow
* Railway Deployment
* MongoDB Atlas Integration

---

## 👨‍💻 Author

**Prashant Kumar**

B.Tech Final Year Student
Aspiring MERN Stack Developer

GitHub:
https://github.com/prashantprajapatii01

LinkedIn:
https://www.linkedin.com/in/prashant-kumar-58b661264

---

## ⭐ Support

If you like this project, please give it a ⭐ on GitHub.
