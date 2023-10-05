import { useState } from "react"
import { usePokedexQuery } from "../../api/pokemonApi"
import { Button } from "../../components/Button"
import { PokemonItem } from "./PokemonItem"
import styles from "./Pokedex.module.scss"

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
            <div>
                <Button disabled={!data.previous} onClick={() => setQueryParams(data.previous!)}>
                    Previous
                </Button>
                <Button disabled={!data.next} onClick={() => setQueryParams(data.next!)}>
                    Next
                </Button>
            </div>
        </>
    )
}