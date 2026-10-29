// Run line by line in mongosh (use CollegeDB first)
use CollegeDB

// Step 2: Create and select a database
db.dropDatabase()
db

// Step 3: Create a collection
db.createCollection("students")
show collections

// Step 4: Insert documents
db.students.insertOne({
  rollNo: 101,
  name: "Arun",
  department: "CSE",
  age: 20,
  mark: 85
})
db.students.insertMany([
  { rollNo: 102, name: "Priya", department: "IT", age: 21, mark: 92 },
  { rollNo: 103, name: "Kumar", department: "CSE", age: 19, mark: 78 },
  { rollNo: 104, name: "Divya", department: "ECE", age: 20, mark: 88 },
  { rollNo: 105, name: "Ravi", department: "CSE", age: 22, mark: 67 }
])

// Step 5: Retrieve documents
db.students.find()
db.students.find({ name: "Priya" })
db.students.findOne({ department: "CSE" })

// Step 6: Apply conditions to queries
db.students.find({ mark: { $gt: 80 } })
db.students.find({
  age: { $gte: 20, $lte: 21 }
})
db.students.find({
  department: { $in: ["CSE", "IT"] }
})
db.students.find({ mark: { $lt: 80 } })

// Step 7: Update documents
db.students.updateOne(
  { rollNo: 101 },
  { $set: { mark: 90 } }
)
db.students.updateMany(
  { department: "CSE" },
  { $inc: { mark: 5 } }
)
db.students.find()

// Step 8: Delete documents
db.students.deleteOne({ rollNo: 105 })
db.students.deleteMany({
  mark: { $lt: 70 }
})
db.students.find()

// Step 9: Sort and limit query results
db.students.find().sort({ mark: -1 })
db.students.find()
  .sort({ mark: -1 })
  .limit(3)

// Step 10: Count documents
db.students.countDocuments()
db.students.countDocuments({
  department: "CSE"
})

// Step 11: Display database information
show dbs
db.stats()
db.students.countDocuments()
