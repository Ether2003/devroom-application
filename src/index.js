import mongoose from "mongoose";
import express from "express";

const app = express();
const port = process.env.PORT || 3333;

mongoose.connect('mongodb+srv://admin:admin@cluster0.neilvdo.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.json({ message: "hello, world!" });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});