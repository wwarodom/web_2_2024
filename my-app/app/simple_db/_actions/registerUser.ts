"use server"

import prisma from "@/utils/db"

export default async function registerUser(formData: FormData) { 
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    console.log(name, email, password) 

    await prisma.user.create({
        data: {
            name:name,
            email,
            password
        }
    })
}