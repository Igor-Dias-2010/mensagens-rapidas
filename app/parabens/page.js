"use client"

import Link from "next/link"
import { useGlobalName } from "../inputName"
import InputName from "../inputName"

export default function Parabens() {
    const name = useGlobalName()

    return (
        <div>
            <Link href="/">Home</Link>
            <h1>Parabéns</h1>
            <InputName />

            <h2>Sincero e seco:</h2>
            <p>Parabéns, <span>{name}</span>. Você mereceu essa conquista.</p>
            <h2>Direto:</h2>
            <p><span>{name}</span>, parabéns! Mandou muito bem nessa vitória.</p>
            <h2>Meloso:</h2>
            <p><span>{name}</span>, parabéns! Que cada esforço teu continue trazendo momentos incríveis como este. 🌟</p>
            <h2>Normal:</h2>
            <p>Parabéns, <span>{name}</span>! Que essa conquista seja só o começo de muitas outras que virão.</p>
            <h2>Leve e reflexivo</h2>
            <p><span>{name}</span>, parabéns! Que essa vitória te inspire a seguir em frente com mais coragem e determinação.</p>
        </div>
    )
}