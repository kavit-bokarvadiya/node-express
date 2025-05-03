const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const PORT = 8000;

const app = express();

//  Middleware - plugin

app.use(express.urlencoded({ extended: false })); // data insert into body for post request

// routes

// home page

app.get("/", (req, res) => {
  return res.send("welcome you are in the home page!!");
});

// GET /users -- list all users -- for HTML formate

app.get("/users", (req, res) => {
  const html = `
        <ul>
            ${users.map(
              (user) =>
                `<li>first name ::  ${user.first_name}</li></br><li>Last name ::  ${user.last_name}</li></br><li>gender ::  ${user.gender}</li></br><li>user id ::  ${user.id}</li></br><li>job title ::  ${user.job_title}</li></br>-----------------</br>`
            )}
        </ul>
    `;
  res.send(html);
});

// GET /api/users -- List all users -- for JSON formate --> REST API

app.get("/api/users", (req, res) => {
  return res.json(users);
});

// post request

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
    if (err) {
      console.error("data is not inserted!");
    } else {
      console.log("data is inserted!");
    }
  });
  console.log("Body :: ", body);
  res.json({ status: "panding" });
});

// for dynamic id
// GET /users/:id == GET /users/:id

app
  .route("/api/users/:id")
  .get((req, res) => {
    // get id
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })

  // PATCH: Partial Update
  .patch((req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex((user) => user.id === id);

    if (index === -1)
      return res.status(404).json({ message: "User not found" });

    // Sirf updated fields ko replace karo
    users[index] = { ...users[index], ...req.body };

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error updating data" });
      }
      return res.json({ message: "User updated (PATCH)", user: users[index] });
    });
  })

  // PUT: Full Replace
  .put((req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex((u) => u.id === id);

    if (index === -1)
      return res.status(404).json({ message: "User not found" });

    // Purana user object ko pura replace kar dena
    users[index] = { ...req.body, id: id };

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error replacing user" });
      }
      return res.json({ message: "User replaced (PUT)", user: users[index] });
    });
  })

  // DELETE (already there)
  .delete((req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex((u) => u.id === id);

    if (index === -1)
      return res.status(404).json({ message: "User not found" });

    users.splice(index, 1); // delete from array

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error deleting user" });
      }
      return res.json({ message: "User deleted successfully" });
    });
  });
app.listen(PORT, (err) => {
  if (err) {
    console.error("oops!!");
  } else {
    console.log(`server is running on PORT :: ${PORT}`);
  }
});
