import { NextRequest, NextResponse } from "next/server";

export default function POST(req:NextRequest):NextResponse{

    try{

        return NextResponse.json({message: 'successfully ..'})
    }catch(error){
        return NextResponse.json({errorMessage : error})
    }
}