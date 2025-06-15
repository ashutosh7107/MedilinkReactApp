const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUserById,
  registerUser,
  updateUser,
  deleteUser,
  loginUser,
  forgotPassword,
} = require("../controllers/userController");

// CRUD/Auth routes
router.post("/login", loginUser);
router.post("/forgot-password", forgotPassword);
router.post("/register", registerUser);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
