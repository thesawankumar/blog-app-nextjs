import connectDB from "@/database/db";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({
        success: false,
        message: "Blog id is required",
      });
    }
    const deleteId = await Blog.findByIdAndDelete(id);
    if (deleteId) {
      return NextResponse.json({
        success: true,
        message: "Blog deleted successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Blog not found",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: " Error in delete route!Something went wrong",
    });
  }
}
