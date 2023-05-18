const router = require("express").Router();
const Job = require("../models/Job.model");
const Category = require("../models/Category.model");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/jobs", (req, res, next) => {
  Job.find()
    .then((jobsFromDB) => {
      console.log(jobsFromDB);
      res.json(jobsFromDB);
    })
    .catch((err) => next(err));
});

router.get("/categories", (req, res, next) => {
  Category.find()
    .then((categoriesFromDB) => {
      console.log(categoriesFromDB);
      res.json(categoriesFromDB);
    })
    .catch((err) => next(err));
});

router.post("/add-job", (req, res, next) => {
  console.log(req.body);

  const { title, description, budget, category } = req.body;

  Job.create({ title, description, budget, category })
    .then((createdJob) => {
      res.status(200);
      res.send(createdJob);
    })
    .catch((err) => next(err));
});

module.exports = router;
