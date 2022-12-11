import express from 'express'
//const express= require('express')

import {authUser,registerUser, userInfoUpdates,getAllUsers,getUserById, getCandidateById} from '../controllers/userControllers.js'
//const {authUser,registerUser}= require('../controllers/productControllers.js')

//import {protect,admin} from '../Middleware/authMiddleware.js'
//const {protect,admin} = require('../Middleware/authMiddleware.js') 

const router = express.Router()
  


router.route('/').post(authUser).get(getAllUsers)
router.route('/candidate/:id').get(getCandidateById)
router.route('/register').post(registerUser)

router.route('/:id').get(userInfoUpdates)

router.route('/:address').get(getUserById)

/*router.route('/propertypos/:addressalso').get(useAddressToFindPosition)*/

//exports.router = router;
export default router