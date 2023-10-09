import { Ability } from "./Ability"
import { PokemonDetails } from "../../../api/types/pokemon"


export function PokemonAbilityDisplay (pokemon : PokemonDetails) {
    return (
        <>
            {pokemon &&(
                <div>
                    {pokemon.abilities.map((ability) => (
                        <Ability key={`${pokemon.name}-${ability.name}`} {...ability} />
                    ))}
                </div>
            )}
        </>
    )
}
//Name for the Button
PokemonAbilityDisplay.displayName = "Abilitys";