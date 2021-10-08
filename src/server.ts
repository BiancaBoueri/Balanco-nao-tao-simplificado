import express from "express";

const app = express();

app.get("/test", (request, response) => {
  return response.send("Hello world!");
});

app.listen(3000, () => console.log("Server is running"));