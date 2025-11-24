"use client"

import Link from 'next/link'
import { useGlobalName } from '../inputName'
import InputName from '../inputName'
export default function Aniversario() {
    const name = useGlobalName()
    return (
        <div>
            <Link href="/">Home</Link>
            <h1>Aniversário</h1>
            <InputName />

            <h2>Sincero e seco:</h2>
            <p>Parabéns, <span>{name}</span>. Desejo um ano realmente bom pra ti, de verdade.</p>
            <h2>Direto:</h2>
            <p>Feliz aniversário, <span>{name}</span>! Que teu dia seja especial e cheio de coisa boa. 🎉</p>
            <h2>Meloso:</h2>
            <p><span>{name}</span>, feliz aniversário! Que teu coração transborde alegria hoje, que a vida te abrace forte e que cada detalhe do teu dia te lembre o quanto tu é especial. ✨💛</p>
            <h2>Normal:</h2>
            <p>Parabéns, <span>{name}</span>! Que teu dia seja leve, cheio de paz e com momentos que realmente valem a pena.</p>
            <h2>Leve e reflexivo:</h2>
            <p>Feliz aniversário, <span>{name}</span>. Que esse ciclo te traga clareza, força e aquelas surpresas boas que mudam tudo pra melhor. 🌟</p>
        </div>
    )
}