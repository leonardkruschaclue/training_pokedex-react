import styles from './Skill.module.scss'

import { PokemonAbility, PokemonDetails } from '../../../../../api/types/pokemon'
import { useAbilityInformationQuery } from '../../../../../api/pokemonApi'
import { LinkButton } from '../../../../../components/LinkButton'

export const Skill: React.FC<PokemonDetails['abilities'][0]> = (ability) => {
    const {data: abilityDetails} = useAbilityInformationQuery(ability.name.replace(' ','-'))
    return (
        <>
        {abilityDetails && (
            <div className={styles.wrapper}>
                <div className={styles.name}>
                    <p>
                        {ability.name}
                    </p> 
                    <p>
                        {abilityDetails.flavor}
                        <LinkButton to={`/ability/${ability.name}`}> More Information</LinkButton>
                    </p>
                </div>
            </div>
        )}
        </>
    )
}