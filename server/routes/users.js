const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middleware/authMiddleware");

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
router.get("/", authenticateToken, getUsers);
router.get("/:id", authenticateToken, getUserById);
router.put("/:id", authenticateToken, updateUser);
router.delete("/:id", authenticateToken, deleteUser);

module.exports = router;
