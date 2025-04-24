
import express from 'express';
import {createTour, updateTour, deleteTour, getSingleTour, getAllTour, getTourBySearch} 
    from '../controllers/tourControllers.js';

const router = express.Router();

router.post('/', createTour);

router.put('/:"id"', updateTour);

router.delete('/:"id"', deleteTour);

router.get('/"id"', getSingleTour);

router.get('/', getAllTour);

router.get('/search/getTourBySearch', getTourBySearch);

export default router;