
import connectedDB from "@/configs/database/db";
import Joi from "joi";
import { NextRequest, NextResponse } from "next/server";

export default async function POST(req:NextRequest):Promise<NextResponse>{

    try{
        await connectedDB()

        const body = await req.json()

        const schema = Joi.object({
            name: Joi.string().trim().required(),
            phone: Joi.string()
            .pattern(/^(09)(1[0-9]|2[0-2]|3[0-9]|9[0-9])-?[0-9]{3}-?[0-9]{4}$/).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required(),
          });

        const {error} = schema.validate(body)

        if(error){
            return NextResponse.json({messageError : error.details[0].message},{status:402})
        }


        return NextResponse.json({message: 'successfully ..'})
    }catch(error){
        return NextResponse.json({errorMessage : error})
    }
}