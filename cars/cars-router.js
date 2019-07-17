const express = require("express");
const carsDb = require("../data/db-config.js");

const router = express.Router();

//Read
router.get("/", async (req, res) => {
  try {
    const cars = await carsDb("cars");
    res.status(200).json(cars);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get cars from database." });
  }
});

//Create
router.post("/", async (req, res) => {
  try {
    const newCar = req.body;
    const [id] = await carsDb("cars").insert(newCar);
    const addNewCar = await carsDb("cars").where({ id });
    res.status(201).json(addNewCar);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to add car to the database." });
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const updatedCar = await carsDb("cars")
      .where({ id: id })
      .update(req.body);
    res
      .status(200)
      .json({ message: `${updatedCar} record(s) has been updated.` });
  } catch (err) {
    res.status(500).json({ message: "Could not update file." });
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCar = await carsDb("cars")
      .where({ id: id })
      .del();
    res.status(200).json({ message: `${deletedCar} record(s) was deleted.` });
  } catch (err) {
    res.status(500).json({ message: "Could not update file." });
  }
});

module.exports = router;
