const express = require("express");
const port = 2021;

const app = express();
app.use(express.json());

// dummy data for student collection
const studentInformations = [
  {
    id: 1,
    name: "Miracle",
    course: "Frontend",
    Score: 80
  },
  {
    id: 2,
    name: "Colin",
    course: "FullStack",
    grade: 92
  },
  {
    id: 3,
    name: "Joe",
    course: "FullStack",
    grade: 81
  },
  {
    id: 4,
    name: "Martin",
    course: "FullStack",
    grade: 62
  },
  {
    id: 5,
    name: "Ebuka",
    course: "Frontend",
    grade: 76
  },
  {
    id: 6,
    name: "Godwin",
    course: "Frontend",
    grade: 45
  },
  {
    id: 7,
    name: "David",
    course: "FullStack",
    grade: 80
  },
  {
    id: 8,
    name: "Confidence",
    course: "Backend",
    grade: 95
  },
  {
    id: 9,
    name: "Samuel",
    course: "Backend",
    grade: 80
  },
];

// Welcome Message
app.get("/", (req, res) => {
  res.send("CodeLab Wilmer Branch Student API");
});

// query search
app.get("/student", async (req, res) => {
  try{
    const userQuery = await req.query;
    // console.log(userQuery)
        const filteredStudent = await studentInformations.filter((info)=>{
            let isValid = true;
            for(key in userQuery) {
                // console.log(key, userQuery[key], info[key]);
                isValid = isValid && info[key] === userQuery[key];
            }
            return isValid;
        });
        // console.log(filteredStudent)
        res.json({data: filteredStudent})
  }catch(err){
    res.send(err.message)
  }
});

app.listen(port, () => {
  console.log(`Server is listening to port: ${port}`);
});
