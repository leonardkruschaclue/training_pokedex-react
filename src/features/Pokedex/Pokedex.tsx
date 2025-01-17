import styles from "./Pokedex.module.scss"

import { useState } from "react"
import { usePokedexQuery } from "../../api/pokemonApi"
import { Button } from "../../components/Button"
import { PokemonItem } from "./PokemonItem"
import { QUERYCOUNT } from "../../Constants"

export const Pokedex: React.FC = () => {
    const [queryParams, setQueryParams] = useState<string>(`?limit=${QUERYCOUNT}`)
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
                <input id="pageSelector" placeholder="Page" onKeyDown={(e) => {
                    if(e.key === 'Enter') {
                        let value = Number.parseInt(e.currentTarget.value);
                        if (value > 0) {
                            let calcValue = (value-1) * QUERYCOUNT;
                            //-------------------------------------Math.floor(data.count,2) ?
                            if(calcValue > data.count) calcValue = Math.floor(data.count / QUERYCOUNT) * QUERYCOUNT;
                            setQueryParams(`?offset=${calcValue}&limit=${QUERYCOUNT}`);
                        }
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