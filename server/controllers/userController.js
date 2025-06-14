const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const moment = require("moment");

// Secret for JWT (should use process.env.JWT_SECRET in production)
const SECRET_KEY = process.env.JWT_SECRET;

// Utility function to validate email
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Get all users (exclude passwords)
exports.getUsers = (req, res, next) => {
  db.query("SELECT id, name, email FROM user ORDER BY id", (err, results) => {
    if (err) return next(err);
    res.json(results);
  });
};

// Register new user
exports.registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res
      .status(400)
      .json({ error: "Name, email and password are required" });

  if (!isValidEmail(email))
    return res.status(400).json({ error: "Invalid email format" });

  db.query(
    "SELECT * FROM user WHERE email = ?",
    [email],
    async (err, results) => {
      if (err) return next(err);
      if (results.length > 0)
        return res.status(409).json({ error: "Email already exists" });

      const hashedPassword = await bcrypt.hash(password, 10);

      db.query("SELECT MAX(id) AS maxId FROM user", (err, results) => {
        if (err) return next(err);
        const newId = results[0].maxId ? results[0].maxId + 1 : 1;

        db.query(
          "INSERT INTO user (id, name, email, password) VALUES (?, ?, ?, ?)",
          [newId, name, email, hashedPassword],
          (err) => {
            if (err) return next(err);
            res.status(201).json({ id: newId, name, email });
          }
        );
      });
    }
  );
};

// Login user
exports.loginUser = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "Email and password are required" });

  db.query(
    "SELECT * FROM user WHERE email = ?",
    [email],
    async (err, results) => {
      if (err) return next(err);
      if (results.length === 0)
        return res.status(401).json({ error: "Invalid credentials" });

      const user = results[0];
      const match = await bcrypt.compare(password, user.password);
      if (!match) return res.status(401).json({ error: "Invalid credentials" });

      const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
        expiresIn: "1h",
      });

      res.json({ message: "Login successful", token });
    }
  );
};

// Forgot Password - Generate reset token
exports.forgotPassword = (req, res, next) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  db.query("SELECT * FROM user WHERE email = ?", [email], (err, results) => {
    if (err) return next(err);
    if (results.length === 0)
      return res.status(404).json({ error: "User not found" });

    const token = crypto.randomBytes(20).toString("hex");
    const expires = moment().add(1, "hour").format("YYYY-MM-DD HH:mm:ss");

    db.query(
      "UPDATE user SET resetToken = ?, resetTokenExpires = ? WHERE email = ?",
      [token, expires, email],
      (err) => {
        if (err) return next(err);

        // You can integrate nodemailer here to email the token
        res.json({
          message: "Reset token generated",
          resetToken: token,
        });
      }
    );
  });
};

// Reset Password with token
exports.resetPassword = async (req, res, next) => {
  const { token, newPassword } = req.body;
  if (!token || !newPassword)
    return res
      .status(400)
      .json({ error: "Token and new password are required" });

  db.query(
    "SELECT * FROM user WHERE resetToken = ? AND resetTokenExpires > NOW()",
    [token],
    async (err, results) => {
      if (err) return next(err);
      if (results.length === 0)
        return res.status(400).json({ error: "Invalid or expired token" });

      const hashedPassword = await bcrypt.hash(newPassword, 10);

      db.query(
        "UPDATE user SET password = ?, resetToken = NULL, resetTokenExpires = NULL WHERE id = ?",
        [hashedPassword, results[0].id],
        (err) => {
          if (err) return next(err);
          res.json({ message: "Password reset successful" });
        }
      );
    }
  );
};

// Get user by ID (exclude password)
exports.getUserById = (req, res, next) => {
  const userId = req.params.id;
  db.query(
    "SELECT id, name, email FROM user WHERE id = ?",
    [userId],
    (err, results) => {
      if (err) return next(err);
      if (results.length === 0)
        return res.status(404).json({ error: "User not found" });
      res.json(results[0]);
    }
  );
};

// Update user (name only)
exports.updateUser = (req, res, next) => {
  const userId = req.params.id;
  const { name } = req.body;

  db.query(
    "UPDATE user SET name = ? WHERE id = ?",
    [name, userId],
    (err, result) => {
      if (err) return next(err);
      if (result.affectedRows === 0)
        return res.status(404).json({ error: "User not found" });
      res.json({ id: parseInt(userId), name });
    }
  );
};

// Delete user and reindex IDs
exports.deleteUser = (req, res, next) => {
  const userId = parseInt(req.params.id);

  db.query("DELETE FROM user WHERE id = ?", [userId], (err, result) => {
    if (err) return next(err);
    if (result.affectedRows === 0)
      return res.status(404).json({ error: "User not found" });

    db.query("UPDATE user SET id = id - 1 WHERE id > ?", [userId], (err) => {
      if (err) return next(err);
      res.status(200).json({ message: "User deleted successfully" });
    });
  });
};
