const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.JWT_SECRET;

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  console.log("Authorization header:", authHeader);
  console.log("Extracted token:", token);
  console.log("SECRET_KEY used for verification:", SECRET_KEY);

  if (!token) return res.status(401).json({ error: "Token missing" });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      console.error("JWT verification failed:", err.name, err.message);
      return res.status(403).json({ error: "Invalid token" });
    }
    console.log("Token successfully verified. User:", user);
    req.user = user;
    next();
  });
};

module.exports = { authenticateToken };
