const { Router } = require("express")
const { getDetails,getQuery,getPath,getBody,createUser } = require("../controllers/productControllers");
const verifyToken = require("../middelware/authMiddelware");
const router = Router();
router.get('/details',verifyToken,getDetails)
router.get('/query',getQuery)
router.get('/query/:id',getPath)
router.post('/login',getBody);
router.post('/user',createUser)
module.exports = router