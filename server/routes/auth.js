import express from"express";
import {signup,signin, googleAuth,signout  } from '../controllers/auth.js';

const router = express.Router();


//craeting a user
router.post("/signup", signup)

//sign in
router.post("/signin", signin)


//google auth
router.post("/google", googleAuth )

//signout
router.get("/signout", signout)

export default router;