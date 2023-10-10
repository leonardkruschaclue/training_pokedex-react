import { Ability } from "./Ability"
import { PokemonDetails } from "../../../api/types/pokemon"


export function PokemonAbilityDisplay (pokemon : PokemonDetails) {
    return (
        <>
            {pokemon &&(
                <div>
                    {pokemon.abilities.map((ability, i) => (
                        <Ability key={`${pokemon.name}-${ability.name}-${i}`} {...ability} />
                    ))}
                </div>
            )}
        </>
    )
}
//Name for the Button
PokemonAbilityDisplay.displayName = "Abilitys";