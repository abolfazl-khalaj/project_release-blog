import connectedDB from "@/configs/db";
import ContactModel, { Contact } from "@/model/Contact";
import Joi, { string } from "joi";
import { isValidObjectId } from "mongoose";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest):Promise<NextResponse> {
    try {
        await connectedDB()

        const body:Contact = await req.json()

        const schema = Joi.object({
            email: Joi.string().email(),
            title: string().required(),
            description: string().required()
        })
        const {error} = schema.validate(body)
        if(error){
            return NextResponse.json({messageError : error.details[0].message},{status:402})
        }    

        await ContactModel.create(body)

        return NextResponse.json({message : 'send contact successfully ..'})
    }catch (error){
        return NextResponse.json({messageError: error})
    }
}

export async function DELETE(req:NextRequest):Promise<NextResponse> {

    try{
        await connectedDB()

        const {id} = await req.json()

        if(!isValidObjectId(id)){
            return NextResponse.json({message: 'data id not valid ...'})
        }

        await ContactModel.findByIdAndDelete(id)
        
        return NextResponse.json({message: 'delete message successfully ..'},{status: 200})
    }catch (error){
        return NextResponse.json({messageError: error},{status:500})
    }
    
}