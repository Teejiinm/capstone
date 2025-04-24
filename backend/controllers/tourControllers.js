
import { parse } from "dotenv";
import Tour from "../models/Tour.js";


export const createTour = async (req, res) => { 

  const newTour = new Tour(req.body);
  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      success: true, 
      message: "Tour created successfully", 
      data: savedTour
    });
  } catch (err) {
    res.status(500).json({
      success: false, 
      message: "Error creating tour. Try again",
      error: err.message});
  }
};


export const updateTour = async (req, res) => { 
  
  const id  = req.params.id
  try {
    const updatedTour = await Tour.findByIdAndUpdate(id,{
        $set: req.body},{new: true});

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedTour
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error updating tour. Try again",});
  }  
};   


export const deleteTour = async (req, res) => { 

  const id  = req.params.id
  try {
    const deleteTour = await Tour.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error deleting tour. Try again",});
  }  
};


export const getSingleTour = async (req, res) => { 
  
  const id  = req.params.id
  try {
    const getSingleTour = await Tour.findById(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not found",});
  }  
}
 
export const getAllTour = async (req, res) => { 

  const page = parseInt(req.query.page);

  console.log(page);

  try {
    const tours = await Tour.find({})
      .limit(8)
      .skip(page * 8);

    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successful",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not found",});
  }
}

//search 

export const getTourBySearch = async (req, res) => {

  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {

    const tours = await Tour.find({
      city: city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    });
    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successful",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not found",});
  }
}