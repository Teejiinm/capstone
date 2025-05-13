import express from 'express';
import { register } from '../controllers/authControllers.js';
import { login } from '../controllers/authControllers.js';


const router = express.Router()

router.post('/register', register);
router.post('/login', login);


export default router;