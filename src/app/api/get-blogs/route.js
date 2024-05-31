import connectDB from "@/database/db";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDB();
    const extractAllBlogs = await Blog.find({});
    if (extractAllBlogs) {
      return NextResponse.json({
        success: true,
        data: extractAllBlogs,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "No blogs found",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Error in get blog data! Please try again",
    });
  }
}
