const express = require("express");
const crypto = require("crypto");

const app = express();

app.use(express.json());

const posts = {};

app.get("/posts", (req, res) => {
  return res.status(200).send({
    content: posts,
  });
});

app.post("/posts", (req, res) => {
  if (req.body.title) {
    try {
      const id = crypto.randomUUID();
      posts[id] = {
        id,
        title: req.body.title,
      };
      return res.status(201).send({
        message: "Added post",
        content: { id, title: req.body.title },
      });
    } catch (error) {
      return res.status(400).send({
        message: error.message,
      });
    }
  } else {
    return es.status(400).send({
      message: "Title is required",
    });
  }
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
