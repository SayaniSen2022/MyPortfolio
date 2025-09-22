// controllers/userController.js
import {users} from "../data/userData"

// Get all users
exports.getAllUsers = (req, res) => {
  res.json(users);
};

// Get user by ID
exports.getUserById = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
};