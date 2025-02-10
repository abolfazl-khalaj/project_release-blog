
import { generateToken, hashedPassword } from "@/configs/auth";
import connectedDB from "@/configs/db";
import UserModel, { IUser } from "@/model/User";
import Joi from "joi";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest):Promise<NextResponse>{

    try{
         connectedDB()

        const body:IUser = await req.json()

        const schema = Joi.object({
            photo: Joi.string(),
            name: Joi.string().trim().required(),
            phone: Joi.string()
            .pattern(/^(09)(1[0-9]|2[0-2]|3[0-9]|9[0-9])-?[0-9]{3}-?[0-9]{4}$/).required(),
            job: Joi.string(),
            aboutMy : Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required(),
          });

        const {error} = schema.validate(body)

        if(error){
            return NextResponse.json({messageError : error.details[0].message},{status:402})
        }

        const token = await generateToken(body.email)
        const passwordHashed = await hashedPassword(body.password)

        const user = {
            ...body ,
            token ,
            password:passwordHashed
        }
        console.log(user);
        

        await UserModel.create(user)
        
        return NextResponse.json({message:"register user successfully ..."},    {
            status: 201,
            headers: { "Set-Cookie": `token=${token};path=/;httpOnly=true` },
          })
        }catch(error){
        return NextResponse.json({errorMessage : error})
    }
}