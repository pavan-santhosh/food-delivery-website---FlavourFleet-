// Importing the Razorpay instance from "../server.js"
import { instance } from "../server.js";

// The checkout function for handling the payment checkout process
export const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };

  try {
    // Create a new order using the Razorpay instance
    const order = await instance.orders.create(options);

    // Send a successful response with the created order details
    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(200).json({
      success: false,
      message: "Error creating order",
    });
  }
};

export const paymentVerification = async (req,res) => {
    
    console.log(req.body);

    
    
    res.status(200).json({
        success: true,
    });
}



/*import {instance} from "../server.js";


export const checkout = async (req,res) => {
    const options = {
        amount: Number(req.body.amount*100),
        currency: "INR"
    };
    const order = await instance.orders.create(options)

    res.status(200).json({
        success: true,
        order,
    });
};*/