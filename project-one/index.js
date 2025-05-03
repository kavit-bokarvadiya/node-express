const express = require("express");
const users = require("./MOCK_DATA.json");
const PORT = 8000;

const app = express();

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
  .patch((req, res) => {
    // edit the user with id
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    // delete user id
    return res.json({ status: "pending" });
  });
  
app.listen(PORT, (err) => {
  if (err) {
    console.error("oops!!");
  } else {
    console.log(`server is running on PORT :: ${PORT}`);
  }
});
