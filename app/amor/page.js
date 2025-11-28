"use client"

import { useGlobalName } from "../inputName"
import Link from "next/link"
import InputName from "../inputName"

export default function Amor() {
    const name = useGlobalName()

    return (
        <div>
            <Link href="/">Home</Link>
            <h1>Amor / romance</h1>
            <InputName />


            <h2>Sincero e seco:</h2>
            <p><span>{name}</span>, tu mexe comigo. Simples assim.</p>

            <h2>Direto:</h2>
            <p><span>{name}</span>, eu gosto de ti de um jeito que não dá pra disfarçar.</p>

            <h2>Meloso:</h2>
            <p><span>{name}</span>, meu coração se ajeita tão bonito quando pensa em ti… é paz misturada com fogo, e eu não canso de querer estar perto.</p>

            <h2>Normal:</h2>
            <p><span>{name}</span>, tem algo em ti que me puxa sempre pra mais perto. Gosto do teu jeito e gosto de estar contigo.</p>

            <h2>Leve e reflexivo:</h2>
            <p><span>{name}</span>, às vezes o amor chega quieto, quase sem querer — e quando a gente percebe, já virou parte do que somos.</p>

        </div>
    )
}