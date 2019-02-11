const express = require("express");
const ctrl = require("./controller");

const app = express();

app.use(express.json());

// Endpoints

app.get("/api/dogs", ctrl.getdogs);

app.post("/api/dog", ctrl.adddog);

app.delete("/api/dog/:id", ctrl.deletedog);

app.put("/api/dog/:id", ctrl.editdog);

const port = 4001;
app.listen(port, () => console.log(`server running ${port}`));
