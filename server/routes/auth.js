const express = require('express')

const router = express.Router();

const { authCheck }  = require("../middlewares/auth");

const { createOrUpdateUser } = require("../controllers/auth");

const myMiddleWare = (req,res,next) => {
    console.log("I Am a middleare  yay")
    next();
}

router.post("/create-or-update-user",authCheck,createOrUpdateUser);

router.get("/testing",myMiddleWare,(req,res) => {
    res.json({
        data: "You SUCCESSFULLY TRIED MIDDLEWARE",
    })
})

module.exports = router;