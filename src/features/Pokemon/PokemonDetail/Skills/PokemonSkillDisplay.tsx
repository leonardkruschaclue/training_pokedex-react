import { useParams } from 'react-router-dom'
import { useBaseAbilityQuery } from '../../../../api/pokemonApi'
import { Skill } from './Skill'

export const PokemonSkillDisplay: React.FC = () => {
    const { pokemonName } = useParams()
    const { data: pokemonSkills } = useBaseAbilityQuery(pokemonName)

    return (
        <>
            {pokemonSkills &&(
                <div>
                    <span>Abilities: </span>
                    {pokemonSkills.abilities.map((skill) => (
                        <Skill key={`${pokemonName}-${skill.name}`} {...skill} />
                    ))}
                </div>
            )}
        </>
    )
}