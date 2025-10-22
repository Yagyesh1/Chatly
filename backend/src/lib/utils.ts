import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
import { Response } from 'express'
config()
export function generateTokenAndSetCookie(userId : string, res: Response){
    try {
        if(typeof process.env.JWT_SECRET !== "string") return
       const token = jwt.sign({userId}, process.env.JWT_SECRET, {
           expiresIn: "7d"
        })
        res.cookie("jwt", token, {
            maxAge: 7*24*60*60,
            httpOnly:true,
            sameSite: "strict",
            secure: false
        })
        return token 
    } catch (error) {
        console.log(error);
    }
  
}