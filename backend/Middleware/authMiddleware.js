const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).send("Access denied.");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user data to request object
    next();
  } catch (err) {
    res.status(401).send("Invalid token.");
  }
};

exports.doctorAuthMiddleWare = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).send("Access denied.");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role != "doctor") {
      return res.status(401).send("Only doctors can access this.");
    }

    req.user = decoded; // Attach user data to request object
    next();
  } catch (err) {
    res.status(401).send("Invalid token.");
  }
};
