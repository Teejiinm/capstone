import express from 'express'
import { getAllUser, getSingleUser, updateUser, deleteUser } from '../controllers/userControllers.js';
const router = express.Router()
 
import { verifyUser } from '../utils/verifyToken.js';
import { verifyAdmin } from '../utils/verifyToken.js';

router.put('/:id', verifyUser, updateUser);
router.delete('/:id', verifyUser, deleteUser);
router.get('/:id', verifyUser, getSingleUser);
router.get('/', verifyAdmin, getAllUser);

export default router;