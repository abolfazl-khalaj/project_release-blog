
import connectedDB from "@/configs/database/db";
import { NextRequest, NextResponse } from "next/server";

export default await function POST(req:NextRequest):NextResponse{

    try{
        connectedDB()



        return NextResponse.json({message: 'successfully ..'})
    }catch(error){
        return NextResponse.json({errorMessage : error})
    }
}