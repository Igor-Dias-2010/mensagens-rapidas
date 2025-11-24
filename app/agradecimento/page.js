"use client"
import Link from 'next/link'
import { useGlobalName } from "../inputName"
import InputName from "../inputName"

export default function Agradecimento() {
    const name = useGlobalName()

    return (
        <div>
            <Link href="/">Home</Link>
            <h1>Agradecimento</h1>
            <InputName />

            <h2>Sincero e seco:</h2>
            <p>Obrigado, <span>{name}</span>. Agradeço de verdade pelo que fez.</p>
            <h2>Direto:</h2>
            <p>Valeu, <span>{name}</span>! Foi muito importante.</p>
            <h2>Meloso:</h2>
            <p><span>{name}</span>, muito obrigado! Sua ajuda significou muito pra mim, de coração.</p>
            <h2>Normal:</h2>
            <p>Obrigado, <span>{name}</span>! Fico realmente grato pelo seu apoio e atenção.</p>
            <h2>Leve e reflexivo:</h2>
            <p><span>{name}</span>, obrigado! Que atitudes como a sua continuem fazendo diferença. 🌟</p>
        </div>
    )
}