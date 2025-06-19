const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.JWT_SECRET;

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token) return res.status(401).json({ error: "Token missing" });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      console.error("JWT verification failed:", err.name, err.message);
      return res.status(403).json({ error: "Invalid token" });
    }

    req.user = user;
    next();
  });
};

module.exports = { authenticateToken };
