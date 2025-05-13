import express from 'express'
import { getAllUser, getSingleUser, updateUser, deleteUser } from '../controllers/userControllers.js';
const router = express.Router()
 
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/:id', getSingleUser);
router.get('/', getAllUser);

export default router;