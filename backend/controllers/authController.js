const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register function for both patients and doctors
exports.register = async (req, res) => {
  const { name, email, password, role } = req.body; // Change type to role

  try {
    // Checking if the user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Ensuring if the role (patient/doctor) is valid
    if (!["patient", "doctor"].includes(role)) {
      return res.status(400).json({ message: "Invalid user role." });
    }

    // Creating a new user
    const newUser = new User({
      name,
      email,
      role, // Use role instead of type
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: `${role} registered successfully` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body; // Include role here as well

    const user = await User.findOne({ email });
    if (!user) {
      // Fix typo, use user instead of User
      return res.status(404).json({ message: "User not found." });
    }

    // Comparing the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role }, // Change type to role
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token: `Bearer ${token}`, role: user.role, user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.logout = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
  });
  return res.status(200).json({ message: "Logged out successfully" });
};
