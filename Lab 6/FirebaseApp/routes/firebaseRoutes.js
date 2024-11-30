const express = require("express");
const { signUp, signIn, verifyToken } = require("../controllers/firebaseController");

const router = express.Router();

// Route for sign-up (create user)
router.post("/signup", signUp);

// Route for sign-in (get Firebase custom token)
router.post("/signin", signIn);

// Add verified route

router.post("/verified", verifyToken, (req, res)=> {
    res.status(200).json({
        message:"Access to the protected route granted.",
        user: req.user,
    });
});


module.exports = router; // Export the router
