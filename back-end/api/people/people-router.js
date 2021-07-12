const router = require("express").Router();

const People = require("./people-model");

router.get("/", (req, res) => {
  People.getAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status({ error: err.message });
    });
});

router.get("/:id", (req, res) => {
  People.findById(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/", (req, res) => {
  People.add(req.body)
    .then((newPerson) => {
      res.status(201).json(newPerson);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.put("/:id", (req, res) => {
  People.edit(req.params.id, req.body)
    .then((editedPerson) => {
      res.status(200).json(editedPerson);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  People.remove(id)
    .then(() => {
      res.status(200).json({ message: `Person ${id} has been removed` });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
