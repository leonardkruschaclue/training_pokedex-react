import styles from './Skill.module.scss'

import { PokemonAbility } from '../../../../types/pokemon'
import { useAbilityInformationQuery } from '../../../../api/pokemonApi'

export const Skill: React.FC<PokemonAbility['abilities'][0]> = (ability) => {
    const {data: abilityDetails} = useAbilityInformationQuery(ability.name)
    return (
        <>
        {abilityDetails && (
            <div className={styles.wrapper}>
                <div className={styles.name}>
                    <p>{ability.name}</p> 
                    <p>{abilityDetails.flavor}</p>
                </div>
            </div>
        )}
        </>
    )
}