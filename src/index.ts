import Express from "express";
import shapeRoute from "./router/bangunDatarRoute";
import roomRoute from "./router/bangunRuangRoute";
import compareRoute from "./router/compareRoute";
import anbkRoute from "./router/anbkRoute";

const app = Express();
// allow read data from body request
app.use(Express.json());

// Define addres route of bangun datar
app.use(`/shape`, shapeRoute);

// use diatas digunakan untuk menambahkan prefix pada url yang mengarah ke route bangu datar
app.use(`/room`, roomRoute);

// Define addres route of compare
app.use(`/compare`, compareRoute);

// Defiene addres route of anbk
app.use(`/anbk`, anbkRoute);

// Define RUNNING port
const PORT = 8000;

// Define START the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
