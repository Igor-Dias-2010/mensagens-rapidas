"use client"

import Link from "next/link"
import { useGlobalName } from "../inputName"
import InputName from "../inputName"

export default function Convite() {
    const name = useGlobalName()
    return (
        <div>
            <Link href="/">Home</Link>
            <h1>Convite</h1>
            <InputName />

            <h1>Casamento</h1>

            <h2>Sincero e seco:</h2>
            <p><span>{name}</span>, o casamento vai acontecer e tua presença é importante. Se puder ir, agradeço.</p>

            <h2>Direto:</h2>
            <p><span>{name}</span>, meu casamento tá marcado. Tu vai?</p>

            <h2>Meloso:</h2>
            <p><span>{name}</span>, seria uma alegria enorme ter tua presença no nosso casamento. Esse dia já é especial, mas contigo fica ainda mais bonito. 💛</p>

            <h2>Normal:</h2>
            <p><span>{name}</span>, estamos preparando nosso casamento e gostaríamos muito que tu estivesse lá com a gente nesse momento tão importante.</p>

            <h2>Leve e reflexivo:</h2>
            <p><span>{name}</span>, esse dia marca uma nova fase da vida, e dividir isso contigo tornaria tudo ainda mais significativo.</p>

            <hr />


            <h1>Aniversário</h1>

            <h2>Sincero e seco:</h2>
            <p><span>{name}</span>, vou comemorar meu aniversário. Se quiser aparecer, será bem-vindo.</p>

            <h2>Direto:</h2>
            <p><span>{name}</span>, vai rolar minha festa de aniversário. Cola lá.</p>

            <h2>Meloso:</h2>
            <p><span>{name}</span>, meu aniversário não fica completo sem as pessoas que eu gosto. Queria muito te ver lá comigo nesse dia. 🎉</p>

            <h2>Normal:</h2>
            <p><span>{name}</span>, vou fazer aniversário e ia ser massa te ter junto. Tua presença sempre deixa tudo mais leve.</p>

            <h2>Leve e reflexivo:</h2>
            <p><span>{name}</span>, mais um ano se passa e compartilhar esse momento contigo deixaria tudo mais especial.</p>

            <hr />


            <h1>Jantar especial</h1>

            <h2>Sincero e seco:</h2>
            <p><span>{name}</span>, vou fazer um jantar em casa. Se quiser vir, está convidado.</p>

            <h2>Direto:</h2>
            <p><span>{name}</span>, tô preparando um jantar hoje. Chega?</p>

            <h2>Meloso:</h2>
            <p><span>{name}</span>, preparei um jantar especial e ficaria realmente feliz com tua presença. Tu sempre deixa qualquer ambiente mais acolhedor. ✨</p>

            <h2>Normal:</h2>
            <p><span>{name}</span>, vai rolar um jantar lá em casa, nada formal, só uma noite boa. Queria muito que tu fosse.</p>

            <h2>Leve e reflexivo:</h2>
            <p><span>{name}</span>, às vezes um jantar simples vira uma lembrança boa quando é compartilhado com quem importa.</p>

            <hr />


            <h1>Evento</h1>

            <h2>Sincero e seco:</h2>
            <p><span>{name}</span>, vai ter um evento e tu tá convidado. Se puder ir, aparece.</p>

            <h2>Direto:</h2>
            <p><span>{name}</span>, tô indo pra um evento. Quer ir junto?</p>

            <h2>Meloso:</h2>
            <p><span>{name}</span>, queria muito compartilhar esse momento contigo. Quando tu tá junto, tudo fica mais especial. 🤍</p>

            <h2>Normal:</h2>
            <p><span>{name}</span>, vai ter um evento legal e achei que seria massa te chamar. Se tu puder ir, vai ser bem bom.</p>

            <h2>Leve e reflexivo:</h2>
            <p><span>{name}</span>, às vezes um simples evento vira um ótimo dia quando a companhia é boa.</p>

            <hr />


            <h1>Em casa / Jogar</h1>

            <h2>Sincero e seco:</h2>
            <p><span>{name}</span>, quer vir aqui? Tô disponível.</p>

            <h2>Direto:</h2>
            <p><span>{name}</span>, bora jogar? Tô online.</p>

            <h2>Meloso:</h2>
            <p><span>{name}</span>, sinto falta das nossas conversas e risadas. Se quiser passar aqui ou jogar comigo, vai ser massa demais. 💫</p>

            <h2>Normal:</h2>
            <p><span>{name}</span>, tô de boa aqui. Se quiser colar ou jogar algo comigo, só chegar.</p>

            <h2>Leve e reflexivo:</h2>
            <p><span>{name}</span>, às vezes um momento simples jogando junto vira exatamente o que a gente precisava no dia.</p>

            <hr />


            <h1>Estudar / Trabalhar</h1>

            <h2>Sincero e seco:</h2>
            <p><span>{name}</span>, vou estudar agora. Se quiser vir junto, pode.</p>

            <h2>Direto:</h2>
            <p><span>{name}</span>, bora estudar juntos?</p>

            <h2>Meloso:</h2>
            <p><span>{name}</span>, estudar contigo sempre flui melhor. Se quiser, junta comigo e a gente faz tudo render. 🌟</p>

            <h2>Normal:</h2>
            <p><span>{name}</span>, tô organizando umas coisas aqui e seria ótimo estudar junto. Se quiser vir, aparece.</p>

            <h2>Leve e reflexivo:</h2>
            <p><span>{name}</span>, dividir o foco e o esforço com alguém sempre deixa o caminho um pouco mais leve.</p>

        </div>
    )
}