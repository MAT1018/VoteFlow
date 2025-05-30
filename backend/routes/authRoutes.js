const express = require('express');
const {
  registerUser,
  loginUser,
  getUserInfo
} = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUser", protect, getUserInfo);

// ✅ Cloudinary image upload route
router.post("/upload-image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  // Cloudinary auto-generates this URL
  const imageUrl = req.file.path;

  res.status(200).json({ imageUrl });
});

module.exports = router;