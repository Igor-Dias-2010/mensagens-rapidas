"use client"

import Link from "next/link"

import { useGlobalName } from "../inputName"
import InputName from "../inputName"

export default function Desculpas() {
    const name = useGlobalName()
    return (
        <div>
            <Link href="/">Home</Link>
            <h1>Desculpas</h1>
            <InputName />

            <h2>Sincero e seco:</h2>
            <p>Desculpa, <span>{name}</span>. Foi mal mesmo.</p>
            <h2>Direto:</h2>
            <p><span>{name}</span>, desculpa pelo que aconteceu, não era minha intenção.</p>
            <h2>Meloso:</h2>
            <p><span>{name}</span>, me desculpa de coração. Eu realmente não queria te magoar e espero que possamos seguir em paz.</p>
            <h2>Normal</h2>
            <p>Desculpa, <span>{name}</span>. Espero que você entenda e possamos superar isso.</p>
            <h2>Leve e reflexivo</h2>
            <p><span>{name}</span>, peço desculpas. Aprendi com isso e quero fazer melhor daqui pra frente.</p>
        </div>
    )
}