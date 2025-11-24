"use client"

import Link from "next/link"
import { useGlobalName } from "../inputName"
import InputName from "../inputName"

export default function BomDia() {
    const name = useGlobalName()

    return (
        <div>
            <Link href="/">Home</Link>
            <h1>Bom dia/tarde/noite</h1>
            <InputName />

            <h1>Bom dia</h1>
            <h2>Sincero e seco:</h2>
            <p>Bom dia, <span>{name}</span>. Que teu dia comece bem e que tudo corra da melhor forma possível.</p>
            <h2>Direto:</h2>
            <p>Bom dia, <span>{name}</span>! Que tua manhã seja produtiva e tranquila.</p>
            <h2>Meloso:</h2>
            <p><span>{name}</span>, bom dia! Que teu dia comece com um sorriso, energia boa e momentos que aqueçam teu coração.</p>
            <h2>Normal:</h2>
            <p>Bom dia, <span>{name}</span>! Que hoje seja um dia leve, cheio de coisas boas e pequenas vitórias.</p>
            <h2>Leve e reflexivo:</h2>
            <p><span>{name}</span>, bom dia! Que cada passo que tu dê hoje te aproxime dos teus objetivos e traga paz pro coração.</p>

            <hr />

            <h1>Boa tarde</h1>
            <h2>Sincero e seco:</h2>
            <p>Boa tarde, <span>{name}</span>. Que o resto do teu dia siga tranquilo e sem complicações.</p>
            <h2>Direto:</h2>
            <p>Boa tarde, <span>{name}</span>! Espero que tua tarde seja produtiva e agradável.</p>
            <h2>Meloso:</h2>
            <p><span>{name}</span>, boa tarde! Que tua tarde seja cheia de energia positiva, boas conversas e momentos que façam sorrir.</p>
            <h2>Normal:</h2>
            <p>Boa tarde, <span>{name}</span>! Que o dia continue leve e que tudo corra da melhor forma possível.</p>
            <h2>Leve e reflexivo:</h2>
            <p><span>{name}</span>, boa tarde! Aproveita cada momento, mesmo os pequenos, porque eles fazem diferença no teu dia.</p>

            <hr />

            <h1>Boa noite</h1>
            <h2>Sincero e seco:</h2>
            <p>Boa noite, <span>{name}</span>. Que tu consiga descansar e recarregar as energias.</p>
            <h2>Direto:</h2>
            <p>Boa noite, <span>{name}</span>! Que tua noite seja tranquila e reparadora.</p>
            <h2>Meloso:</h2>
            <p><span>{name}</span>, boa noite! Que tu durma bem, tenha sonhos bons e acorde renovado pra um novo dia.</p>
            <h2>Normal:</h2>
            <p>Boa noite, <span>{name}</span>! Que a noite te traga paz, descanso e aquela sensação boa de dever cumprido.</p>
            <h2>Leve e reflexivo:</h2>
            <p><span>{name}</span>, boa noite! Que o descanso de hoje prepare teu corpo e mente para enfrentar amanhã com energia e clareza.</p>
        </div>
    )
}