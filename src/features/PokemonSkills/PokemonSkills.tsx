import { useParams } from 'react-router-dom'
import { usePokemonQuery, useSkillsQuery } from '../../api/pokemonApi'
import { LinkButton } from '../../components/LinkButton'
import styles from './PokemonDetail.module.scss'
import { Skill } from './Skill'

export const PokemonSkills: React.FC = () => {
    const { pokemonName } = useParams()
    const { data: pokemonSkills } = useSkillsQuery(pokemonName)

    return (
        <>
        <div>
            {pokemonSkills?.abilitys.map((skill) => (
                <Skill key={`${pokemonName}-${skill.name}`} {...skill} />
            ))}
        </div>
        <LinkButton to={`/${pokemonName}`}>Back</LinkButton>
        </>
    )
}