import dbConnect from "../../../../utils/mongo";
import Order from "../../../../models/Order";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  // const data =await request.json();
  // await dbConnect();
  // const newUser =new Product(data);
  // try {
  //     // await newUser.save();
  //     return new NextResponse(newUser, {
  //       status: 201,
  //     });
  //   } catch (err) {
  //     return new NextResponse(err.message, {
  //       status: 500,
  //     });
  //   }
};

export const GET = async (request, { params }) => {
  console.log(params);
  const { id } = params;
  try {
    await dbConnect();

    const order = await Order.findById(id);

    // console.log(order + "----");

    return new NextResponse(JSON.stringify(order), { status: 200 });
  } catch (err) {
    console.log("error........");
    return new NextResponse("Database Error", { status: 500 });
  }
};
