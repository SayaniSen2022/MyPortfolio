// controllers/userController.js
import users from "../data/userData.js";

// Get all users
export const getAllUsers = (req, res) => {
  res.json(users);
};

// Get user by ID
export const getUserById = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
};
