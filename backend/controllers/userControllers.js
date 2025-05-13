

import User from "../models/User.js";


export const createTour = async (req, res) => { 

  const newUser = new User(req.body);
  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      success: true, 
      message: "User created successfully", 
      data: savedTour
    });
  } catch (err) {
    res.status(500).json({
      success: false, 
      message: "Error creating tour. Try again",
      error: err.message});
  }
};


export const updateUser = async (req, res) => { 
  
  const id  = req.params.id
  try {
    const updatedUser = await User.findByIdAndUpdate(id,{
        $set: req.body},{new: true});

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedUser
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error updating user. Try again",});
  }  
};   


export const deleteUser = async (req, res) => { 

  const id  = req.params.id
  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error deleting user. Try again",});
  }  
};


export const getSingleUser = async (req, res) => { 
  
  const id  = req.params.id
  try {
    const user = await User.findById(id);

    res.status(200).json({
      success: true,
      message: "Successful",
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not found",});
  }  
};
 
export const getAllUser = async (req, res) => { 

  try {
    const users = await User.find({})

    res.status(200).json({
      success: true,
      message: "Successful",
      data: users,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not found",});
  }
};