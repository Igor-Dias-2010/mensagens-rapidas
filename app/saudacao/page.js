"use client"

import Link from 'next/link'

import { useGlobalName } from '../inputName'
import InputName from '../inputName'

export default function Saudacao() {
    const name = useGlobalName()

    return (
        <div>
            <Link href="/">Home</Link>
            <h1>Saudação</h1>
            <InputName />

            <h2>Sincero e seco:</h2>
            <p>Oi, <span>{name}</span>. Espero que seu dia esteja indo bem.</p>
            <h2>Direto:</h2>
            <p>E aí, <span>{name}</span>! Tudo certo?</p>
            <h2>Meloso:</h2>
            <p>Oi, <span>{name}</span>! Que bom te ver, espero que seu dia esteja cheio de coisas boas.</p>
            <h2>Normal:</h2>
            <p>Olá, <span>{name}</span>! Como você está hoje?</p>
            <h2>Leve e reflexivo:</h2>
            <p>Oi, <span>{name}</span>. Que seu dia seja tranquilo e cheio de pequenas boas surpresas. 🌟</p>
        </div>
    )
}