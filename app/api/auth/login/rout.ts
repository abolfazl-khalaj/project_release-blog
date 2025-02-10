import { verifyPassword } from "@/configs/auth";
import connectedDB from "@/configs/db";
import UserModel from "@/model/User";
import Joi from "joi";
import { NextRequest, NextResponse } from "next/server";

interface BodyValues {
    specifications: string;
    password: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
        await connectedDB();

        const body: BodyValues = await req.json();

        const schema = Joi.object({
            specifications: Joi.string().required(),
            password: Joi.string().min(8).required(),
        });

        const { error } = schema.validate(body);
        if (error) {
            return NextResponse.json({ messageError: error.details[0].message }, { status: 402 });
        }

        const { specifications, password } = body;

        const user = await UserModel.findOne({
            $or: [{ name: specifications }, { email: specifications }],
        });

        if (!user) {
            return NextResponse.json({ messageError: "User not found" }, { status: 404 });
        }

        const isMatch = await verifyPassword(password, user.password);
        if (!isMatch) {
            return NextResponse.json({ messageError: "Invalid password" }, { status: 401 });
        }


        return NextResponse.json({message:"register user successfully ..."},    {
            status: 20,
            headers: { "Set-Cookie": `token=${user.token};path=/;httpOnly=true` },
          })    } catch (error) {
        return NextResponse.json({ errorMessage: error }, { status: 500 });
    }
}
