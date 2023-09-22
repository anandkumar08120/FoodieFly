import dbConnect from "../../../utils/mongo";
import Product from "../../../models/Product"
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const data =await request.json();

    await dbConnect();

    

    const newUser =new Product(data);

    try {
        // await newUser.save();
        return new NextResponse(newUser, {
          status: 201,
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
  
      const products = await Product.find();
  
      return new NextResponse(JSON.stringify(products), { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
};