import cors from "cors";
import express from "express";
import FIRESTOREDATABASE from "./Firestore.js";

const Database = new FIRESTOREDATABASE();
const app = express();
const port = process.env.PORT || 3000;
const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port);

app.get("/api/get/", async (_req, res) => {
  const data = await Database.getData();
  res.json(data.val());
});

app.post("/api/post/", (req, res) => {
  const request = {
    id: req.body.id,
    humidity: req.body.humidity,
    motion: req.body.motion,
    light: req.body.light,
  };
  Database.postData(
    request.id,
    request.humidity,
    request.motion,
    request.light
  );
  res.send("OK");
});

// const mqttSimulation = () => {
//   console.log("Starting simulation...");

//   let index = 0;

//   setInterval(() => {
//     Database.postData(
//       index,
//       Math.floor(Math.random() * 101),
//       Math.floor(Math.random() * 101),
//       Math.floor(Math.random() * 101)
//     );

//   if(index === 24) {
//     index = 0
//   } else {
//     index += 1;
//   }
  
//   }, 1000);
// };