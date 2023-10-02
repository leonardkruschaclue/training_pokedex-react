import { Ability } from './Ability'
import { PokemonDetails } from '../../../../../api/types/pokemon'

import styles from "../Content.module.scss"

export const PokemonAbilityDisplay: React.FC<PokemonDetails> = (pokemon) => {
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