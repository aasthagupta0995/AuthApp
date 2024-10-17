import { dbConnect } from "@/app/lib/dbConnect";
import UserModel from "@/app/models/user";
import bcrypt from "bcryptjs"

import { sendVerificationEmail } from "@/app/helpers/sendVerificationEmail";


export async function POST(request: Request) {
    await dbConnect()
    try {
        const { username, email, password } = await request.json()           // desctructure and get the username password and the email from ui api request as in payload 
        //username get only when user which have username and verified
        const existingVerifiedByUsername = await UserModel.findOne({
            username,
            isVerified: true
        })

        if (existingVerifiedByUsername) {
            return Response.json({
                success: false,
                message: "Username is already taken"
            }, { status: 400 })
        }
        const VerifyCode = Math.floor(100000 + Math.random() * 900000).toString()
        console.log(VerifyCode, "verifyCode")

        const existingUserbyEmail = await UserModel.findOne({ email })

        if (existingUserbyEmail) {
            if (existingUserbyEmail.IsVerfied) {
                return Response.json({
                    success: false,
                    message: "User already exists with this email",
                }, { status: 500 })
            }
            else {
                const hashedPassword = await bcrypt.hash(password, 10)
                existingUserbyEmail.password = hashedPassword;
                existingUserbyEmail.verifyCode = VerifyCode;
                existingUserbyEmail.verifyCodeExpiry = new Date(Date.now() + 3600000)
                await existingUserbyEmail.save()
            }

        }
        else {
            const hashedPassword = await bcrypt.hash(password, 10)  // it will encrypt the password by 10 rounds
            const expiryDate = new Date()  // new as a object so as a refrence we can take it as const 
            expiryDate.setHours(expiryDate.getHours() + 1)

            const newUser = new UserModel({
                username,
                email,
                password: hashedPassword,
                VerifyCode,
                verifyCodeExpiry: expiryDate,
                IsVerfied: false,
                isAccepting: true,
                messages: []
            })

            await newUser.save()
        }

        //send verification email 

        const emailResponse = await sendVerificationEmail(email, username, VerifyCode)
        console.log(emailResponse)

        if (!emailResponse.success) {
            return Response.json({
                success: false,
                message: emailResponse.message
            }, { status: 500 }
            )
        }

        return Response.json({
            success: true,
            message: emailResponse.message
        }, { status: 201 })
    }
    catch (error) {
        console.error(error, 'Error in register user')
        return Response.json({
            success: false,
            message: "Error in registering user"
        }, {
            status: 500
        })
    }
}