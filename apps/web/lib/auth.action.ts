import z from "zod"
import CredentialProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from "next-auth";
import { Crafty_Girls } from "next/font/google";
import { error } from "console";


const passwordSchema = z.string().min(6).max(50).refine(
    (val) => /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,50}$/.test(val),
    {
        message: "Password must contain at least one uppercase letter, one number, and one special character"
    }
  );
const signupSchema =z.object({
    firstname:z.string().min(3).max(30),
    lastname:z.string().min(3).max(30),
    email: z.string().email(),
    password:z.string().min(6).max(30),
}) 
const signinSchema = z.object({
    email: z.string().email(),
    password: passwordSchema
})


export const authOptions: NextAuthOptions = {
    providers: [
        CredentialProvider({
            credentials: {
                fistname: {label: "First Name", type: "text", placeholder: "Jon"},
                lastname: { label: "Last Name", type: "text", placeholder: "Doe" },
                username: { label: "Username", type: "text", placeholder: "username" },
                email: { label: "Email", type: "text", placeholder: "johndoe@gmail.com" },
                password: { label: "Password", type: "password", required: true },
            },
              async authorize(credentials: any) {
                   if (!credentials.firstname && !credentials.lastname && !credentials.username) {
                    try {
                        signinSchema.parse({
                            email: credentials.email,
                            password: credentials.password,
                        })
                    } catch (e) {
                        console.error("Validation Error", e)
                        throw new Error("Invalid Cradentials")
                     }
                   }
              },                
            },
        })
    ]
}