import dbConnect from "../../../utils/mongo";
import Order from "../../../models/Order";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const data =await request.json();

    await dbConnect();
    const order =new Order(data);

    try {
        // await newUser.save();
        const savedProduct=order.toObject();
        savedProduct._id=savedProduct._id.toString();
        const responseJSON=JSON.stringify(savedProduct)
        return new NextResponse(responseJSON, {
          status: 201,
          headers:{
            'Content-Type':'application/json',
          },
        });
      } catch (err) {
        return new NextResponse(err.message, {
          status: 500,
        });
      }
}

export const GET = async (request) => {

  
    try {
      await dbConnect();
  
      const orders = await Order.find();
  
      return new NextResponse(JSON.stringify(orders), { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
};