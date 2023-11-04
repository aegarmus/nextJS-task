import { NextResponse } from 'next/server'
import { prisma } from '@/libs/prisma'

export const GET = async () => {
    try {
        const task = await prisma.task.findMany()
        console.log (task)
        return NextResponse.json(task)
        
    } catch (error) {
        return NextResponse.json({message: 'No pudimos encontrar los datos', status: 404, error: error.message})
    }
}

export const POST = async (request) => {
    try {
        /* const data = await request.json() */

        const { title, description } = await request.json()

        await prisma.task.create({
            data : {
                /* title: data.title,
                description: data.description */

                title,
                description
            }
        })

        return NextResponse.json({message: 'Tarea Creada con éxito!', status: 201})
        
    } catch (error) {
        return NextResponse.json({message: 'No pudimos crear los datos', status: 404, error: error.message})
    }
}