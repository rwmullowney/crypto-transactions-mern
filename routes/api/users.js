const router = require("express").Router();
const usersController = require("../../controllers/usersController");


// Grab crypto information
// router.get("/", (req, res) => {
//   axios.get("https://api.coinmarketcap.com/v2/ticker/?limit=10")
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// })


router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(usersController.findById)
//   .put(usersController.update)
//   .delete(usersController.remove);

module.exports = router;
