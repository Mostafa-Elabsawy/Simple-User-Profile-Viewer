import express from "express";
const app = express();
const prot = 3000;
app.ues(express.json());
app.listen(prot, () => {
  console.log(`server started at http://localhost:${prot}`);
});
