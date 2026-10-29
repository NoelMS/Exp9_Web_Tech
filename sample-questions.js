// Solutions to the sample questions, run in mongosh

// Q1. Student Database (CollegeDB.students)
db.students.drop()
db.students.insertMany([
  { rollNo: 101, name: "Arun", department: "CSE", age: 20, mark: 85 },
  { rollNo: 102, name: "Priya", department: "IT", age: 21, mark: 92 },
  { rollNo: 103, name: "Kumar", department: "CSE", age: 19, mark: 78 },
  { rollNo: 104, name: "Divya", department: "ECE", age: 20, mark: 88 },
  { rollNo: 105, name: "Ravi", department: "CSE", age: 22, mark: 67 }
])
db.students.find({ rollNo: 103 })
db.students.find({ mark: { $gt: 80 } })
db.students.updateOne({ rollNo: 105 }, { $set: { mark: 72 } })
db.students.deleteOne({ rollNo: 104 })

// Q2. Employee Database (EmployeeDB.employees)
db.dropDatabase()
db.employees.insertMany([
  { empId: 1, name: "Meena", department: "HR", salary: 52000, experience: 6 },
  { empId: 2, name: "Suresh", department: "IT", salary: 78000, experience: 9 },
  { empId: 3, name: "Lakshmi", department: "IT", salary: 39000, experience: 2 },
  { empId: 4, name: "Rahul", department: "Finance", salary: 45000, experience: 4 },
  { empId: 5, name: "Anita", department: "IT", salary: 61000, experience: 7 }
])
db.employees.find({ salary: { $gt: 40000 } })
db.employees.updateOne({ empId: 3 }, { $set: { salary: 42000 } })
db.employees.find().sort({ salary: -1 })
db.employees.countDocuments({ department: "IT" })

// Q3. Product Database (ProductDB.products)
db.dropDatabase()
db.products.insertMany([
  { productId: 1, name: "Yoga Mat", category: "Fitness", price: 899, stock: 40 },
  { productId: 2, name: "Protein Powder", category: "Nutrition", price: 2499, stock: 0 },
  { productId: 3, name: "Resistance Bands", category: "Fitness", price: 599, stock: 25 },
  { productId: 4, name: "Green Tea", category: "Nutrition", price: 349, stock: 0 },
  { productId: 5, name: "Foam Roller", category: "Fitness", price: 1299, stock: 12 }
])
db.products.find({ category: "Fitness" })
db.products.find({ price: { $gte: 500, $lte: 2000 } })
db.products.updateOne({ productId: 1 }, { $inc: { stock: 10 } })
db.products.deleteMany({ stock: 0 })
db.products.find().sort({ price: -1 }).limit(5)

// Q4. Library Database (LibraryDB.books)
db.dropDatabase()
db.books.insertMany([
  { bookId: 1, title: "Atomic Habits", author: "James Clear", category: "Self-help", price: 499 },
  { bookId: 2, title: "Why We Sleep", author: "Matthew Walker", category: "Health", price: 599 },
  { bookId: 3, title: "Deep Work", author: "Cal Newport", category: "Self-help", price: 450 },
  { bookId: 4, title: "Digital Minimalism", author: "Cal Newport", category: "Self-help", price: 420 }
])
db.books.find({ author: "Cal Newport" })
db.books.find({ category: "Health" })
db.books.updateOne({ bookId: 3 }, { $set: { price: 475 } })
db.books.find().sort({ title: 1 })
db.books.countDocuments()

// Q5. Query operations (CollegeDB.students)
db.students.find({ mark: { $gte: 75 } })
db.students.find({ age: { $lt: 21 } })
db.students.find({ department: { $in: ["CSE", "IT"] } })
db.students.find().sort({ mark: -1 }).limit(3)
db.students.updateMany({ department: "CSE" }, { $set: { grade: "A" } })
