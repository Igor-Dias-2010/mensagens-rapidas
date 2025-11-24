"use client"

import { useState, useEffect } from "react"

let globalName = ''
let listeners = new Set()

export function setGlobalName(newName) {
    globalName = newName
    listeners.forEach(fn => fn(globalName))
}


export function useGlobalName() {
    const [name, setName] = useState(globalName)

    useEffect(() => {
        listeners.add(setName)
        return () => listeners.delete(setName)
    }, [])
    return name
}

export default function InputName() {
    const name = useGlobalName()

    const handleInputNameChange = e => setGlobalName(e.target.value)


    return (
        <div>
            <label htmlFor="nome">Digite o nome:</label>
            <input type="text" id="nome" value={name} onChange={handleInputNameChange} placeholder="Digite um nome" />
        </div>
    )
}