import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export const GET = async (request, {params}) => {
    const task = await prisma.task.findUnique({
        where: { id: Number(params.id) }
    })

    return NextResponse.json(task)
}

export const PUT = async (request, {params}) => {
    const data = await request.json()

    const taskUpdated = await prisma.task.update({
        where: { id: Number(params.id) },
        data: data
    })

    return NextResponse.json('Actualizamos la tares :', taskUpdated)
}

export const DELETE = async (request, {params}) => {
    const deletedTask = await prisma.task.delete({
        where: { id: Number(params.id)}
    })

    return NextResponse.json('Eliminando tarea: ' + deletedTask)
}