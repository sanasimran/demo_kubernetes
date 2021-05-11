const jwt = require("jsonwebtoken");

// middleware to validate token
const verifyToken = (req, res, next) => {
  console.log("Validating token :: " + req.header("auth-token"))
  const token = req.header("auth-token");
  if (!token) return res.status(401).json({ error: "Access denied" });

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    console.log("Token verified successfully");
    next();
  } catch (err) {
    console.log("Token verification failed");
    res.status(400).json({ error: "Token is not valid" });
  }
};

module.exports = verifyToken;
