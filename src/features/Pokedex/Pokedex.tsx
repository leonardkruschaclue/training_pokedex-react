import styles from "./Pokedex.module.scss"

import { useState } from "react"
import { usePokedexQuery } from "../../api/pokemonApi"
import { Button } from "../../components/Button"
import { PokemonItem } from "./PokemonItem"
import { QUERYCOUNT } from "../../Constants"

export const Pokedex: React.FC = () => {
    const [queryParams, setQueryParams] = useState<string>("")
    const { data } = usePokedexQuery(queryParams)

    if (!data) {
        return null
    }

    return (
        <>
            <div className={styles.pokedex}>
                {data.pokedex?.map((pokemon) => (
                    <PokemonItem key={pokemon.id} {...pokemon} />
                ))}
            </div>
            <div className={styles.navigation}>
                <Button disabled={!data.previous} onClick={() => setQueryParams(data.previous!)}>
                    Previous
                </Button>
                <input placeholder="Page" onKeyDown={(e) => {
                    if(e.key === 'Enter') {
                        let value = Number.parseInt(e.currentTarget.value);
                        if (value > 0)
                            setQueryParams(`?offset=${(value-1) * QUERYCOUNT}&limit=${QUERYCOUNT}`);
                        e.currentTarget.value = "";
                    }
                }} />
                <Button disabled={!data.next} onClick={() => setQueryParams(data.next!)}>
                    Next
                </Button>
            </div>
        </>
    )
}