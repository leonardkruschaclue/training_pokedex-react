import { Skill } from './Skill'
import { PokemonDetails } from '../../../../../api/types/pokemon'

import styles from "../Content.module.scss"

export const PokemonAbilityDisplay: React.FC<PokemonDetails> = (pokemon) => {
    return (
        <>
            {pokemon &&(
                <div>
                    {pokemon.abilities.map((skill) => (
                        <Skill key={`${pokemon.name}-${skill.name}`} {...skill} />
                    ))}
                </div>
            )}
        </>
    )
}