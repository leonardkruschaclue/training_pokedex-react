
import {  Pokemon } from "../../../types/pokemon"
import { PokemonType } from "./PokemonType"
import styles from './PokemonHeader.module.scss'

export function PokemonHeader(subject : Pokemon) {
    return (
        <>
            <h1 className={styles.header}>{subject?.name}</h1>
            <div>
                {subject?.types.map((type) => (
                    <PokemonType key={type} type={type} />
                ))}
            </div>
        </>
    )
}