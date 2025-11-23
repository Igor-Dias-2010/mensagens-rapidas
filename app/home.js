"use client"

import Link from 'next/link'

export default function Home(){
    return(
        <div>
            <h1>Mensagens prontas</h1>
            <h2>Digite o nome e receba o texto já montado</h2>
            <h2>Selecione o tema:</h2>

            <Link href="../aniversario"><button>Aniversário</button></Link>
            <Link href="../saudacao"><button>Saudação</button></Link>
            <Link href="../desculpas"><button>Desculpas</button></Link>
            <Link href="../parabens"><button>Parabéns</button></Link>
            <Link href="../agradecimento"><button>Agradecimento</button></Link>
            <Link href="../bom dia"><button>Bom dia/tarde/noite</button></Link>

        </div>
    )
}