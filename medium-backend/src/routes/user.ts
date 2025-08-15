import { Hono } from "hono";
export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();

import { signupInput , signinInput} from "@anurag100xdev/medium-common";



import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate'
import {
    sign
} from 'hono/jwt'
userRouter.post('/signup', async (c) => {
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
    if(!success){
        c.status(411)
        return c.json({
            message:"inputs are not valid"
        })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,

    }).$extends(withAccelerate())
    try {
        const user = await prisma.user.create({
            data: {
                username: body.username,
                password: body.password,
                name: body.name
            }
        })
        const jwt = await sign({ id: user.id }, c.env.JWT_SECRET)
        return c.text(jwt)
    } catch (error) {
        c.status(411)
        return c.json({
            error: "User already exists with this email or username"
        })
    }
})



userRouter.post('/signin', async (c) => {
    const body = await c.req.json();
    const {success} = signinInput.safeParse(body);
    if(!success){
        c.status(411)
        return c.json({
            message:"inputs are not valid"
        })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,

    }).$extends(withAccelerate())
    try {
        const user = await prisma.user.findFirst({
            where: {
                username: body.username,
                password: body.password,
            }
        })
        if (!user) {
            return c.json({
                error: "User does not exists with this email or username"
            })
        }
        const jwt = await sign({ id: user.id }, c.env.JWT_SECRET)
        return c.text(jwt)
    } catch (error) {
        c.status(403)
        return c.json(
            {
                message: "incorrect credentials"
            }
        );
    }
})


